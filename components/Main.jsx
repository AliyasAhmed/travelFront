import React, { useState, useEffect, useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { GrMicrophone } from 'react-icons/gr';
import { VscSend } from 'react-icons/vsc';
import axios from 'axios';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { AppContext } from '../context/AppContext';
import UserProfileDetails from './UserProfileDetails';
import Login from '../src/Pages/Login';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [agencyId, setAgencyId] = useState('');
    // const [showProfile, setShowProfile] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    const { userName, setPrevPrompt, input, setInput, responseContent, setResponseContent, showProfile, setShowProfile } = useContext(AppContext);

    // useEffect to extract userId and agencyId from token
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.warn('No auth token found in localStorage');
            return;
        }

        setToken(token);

        try {
            const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
            const now = Math.floor(Date.now() / 1000); // Current timestamp in seconds
            if (payload.exp < now) {
                console.warn('Token has expired');
                return;
            }

            setUserId(payload.id || '');
            setAgencyId(payload.agencyId || '');
        } catch (error) {
            console.error('Error decoding token:', error.message);
        }
    }, []);

    // useEffect to fetch chat history once userId and agencyId are set
    useEffect(() => {
        const fetchChatHistory = async () => {
            if (!userId || !agencyId) return;

            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/v1/conversations/conversations/user/${userId}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );
                console.log("conversation token", token);
                setChatHistory(response.data); // Update `chatHistory`
            } catch (error) {
                console.error('Error fetching chat history:', error.message);
            }
        };

        fetchChatHistory();
    }, [userId, agencyId, token]);

    useEffect(() => {
        setPrevPrompt(chatHistory); // Sync chatHistory to prevPrompt
    }, [chatHistory]);

    // Delay function for word-by-word display
    const delayPara = (index, nextWord) => {
        setTimeout(() => {
            setResponseContent((prev) => prev + nextWord);
        }, 75 * index); // Adjust delay time as needed
    };

    const formatResponse = (text) => {
        return text
            .replace(/#\s(.*?)\n/g, '<h1 style="color: black; font-size: 24px;">$1</h1>') // H1
            .replace(/##\s(.*?)\n/g, '<h2 style="color: green;font-size: 22px">$1</h2>') // H2
            .replace(/###\s(.*?)\n/g, '<h3 style="color: orange;">$1</h3>') // H3
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/---/g, '<hr/>') // Horizontal rule
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1"/>') // Images
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') // Links
            .replace(/\*\s(.*?)\n/g, '<li>$1</li>') // List items
            .replace(/\n/g, '<br/>') // Line breaks
            .replace(/(.+?)(?=<br\/>|$)/g, '<span style="color: black ;">$1</span>'); // Normal text
    };

    const sendPrompt = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.warn('No auth token found in localStorage');
            navigate('/login');
            return;
        }
        if (!input.trim()) return;

        setResponseContent('');
        setLoading(true);

        try {
            console.log('Token:', token);
            console.log('User ID:', userId);
            console.log('Agency ID:', agencyId);

            const response = await axios.post(
                `http://127.0.0.1:8000/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId}`,
                { user_prompt: input },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.trim()}`,
                    },
                }
            );

            const responseText = response.data.content;
            const formattedText = formatResponse(responseText);
            const responseWords = formattedText.split(' ');

            responseWords.forEach((word, index) => {
                delayPara(index, word + ' ');
            });
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
            alert('Failed to fetch response. Please try again.');
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    // Export to PDF function (unchanged)
    const exportToPDF = () => {
        const element = document.getElementById("responseContent");
        html2canvas(element, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 0.8);
            const pdf = new jsPDF("p", "mm", "a4");
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * pageWidth) / canvas.width;

            const headerHeight = 20;
            pdf.setFontSize(20);
            pdf.text("MaizBaan AI - Report", 10, 10);
            const logo = "../src/assets/logo.jpg";
            pdf.addImage(logo, "PNG", 170, 5, 30, 10);

            const contentHeight = imgHeight;
            const pageContentHeight = pageHeight - headerHeight;
            const totalPages = Math.ceil(contentHeight / pageContentHeight);

            let remainingHeight = contentHeight;
            let sourceY = 0;
            let currentPage = 0;

            while (remainingHeight > 0) {
                const currentHeight = Math.min(remainingHeight, pageContentHeight);
                const sourceHeight = (currentHeight * canvas.height) / imgHeight;
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = sourceHeight;
                const ctx = tempCanvas.getContext('2d');
                ctx.drawImage(canvas, 0, sourceY, canvas.width, sourceHeight, 0, 0, canvas.width, sourceHeight);
                const pageImgData = tempCanvas.toDataURL("image/jpeg", 0.8);

                pdf.addImage(pageImgData, "JPEG", 0, currentPage === 0 ? headerHeight : 0, imgWidth, currentHeight);
                remainingHeight -= currentHeight;
                sourceY += sourceHeight;

                if (remainingHeight > 0) {
                    pdf.addPage();
                    currentPage++;
                    pdf.setFontSize(18);
                    pdf.text("MaizBaan AI - Report", 10, 10);
                    pdf.addImage(logo, "PNG", 170, 5, 30, 10);
                }
            }

            pdf.save("output.pdf");
        }).catch((error) => {
            console.error("Error generating PDF:", error);
            alert("Failed to generate PDF. Please try again.");
        });
    };

    return (
        <div className="flex-1 min-h-screen pb-[15vh] relative m-3">
            {/* Header */}
            <div className="flex text-xl p-5 text-slate-700 justify-between relative">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
                    MaizBaan Ai
                </p>
            </div>

            {/* User Profile Details */}
            {showProfile && (
                <div
                    className="absolute z-[9999] top-[0] right-[50px]"
                    style={{ position: 'absolute' }}
                >
                    <UserProfileDetails />
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-[900px] mx-auto relative z-[1]">
                {loading ? (
                    <div className="py-10 px-[5%] flex flex-col items-center gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                        </div>
                        <p className="text-lg font-medium text-gray-500">Fetching response...</p>
                    </div>
                ) : responseContent ? (
                    <>
                        <div
                            id="responseContent"
                            className="relative z-[0]"
                            style={{
                                backgroundColor: 'white',
                                color: 'white',
                                borderRadius: '8px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '20px',
                                marginBottom: '20px',
                                fontFamily: 'Arial, sans-serif',
                                backdropFilter: 'blur(15px)',
                                height: '90vh',
                                overflow: 'scroll',
                                overflowX: 'hidden',
                            }}
                            dangerouslySetInnerHTML={{ __html: responseContent }}
                        />
                        <button onClick={exportToPDF} className="bg-red-500 text-white p-2 rounded mb-10">
                            Download as PDF
                        </button>
                    </>
                ) : (
                    <>
                        <div className="my-12 text-[56px] font-semibold text-slate-500 p-5">
                            <p>
                                <span className="bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] bg-clip-text text-transparent text-lg md:text-3xl">
                                    Hello, {userName}.
                                </span>
                            </p>
                            <p className="text-slate-400 text-3xl   ">How can I help you today?</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Give me a travel package of 3 days for Kashmir</p>
                            </div>
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Give me a travel package for Ladakh</p>
                            </div>
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Where to get best kashmiri cuisine in Srinagar?</p>
                            </div>
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Give me 3 days travel package for Gulmarg Kashmir.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 w-full max">
                <div className="flex items-center justify-between gap-10 border border-[#4b4b4b85] backdrop-blur-lg bg-[#00000062] shadow-lg py-2 px-5 rounded-md">
                    <textarea
                        className="flex-1 bg-transparent border-none outline-none p-2 text-lg placeholder:text-gray-500 placeholder:font-bold rounded-md text-ellipsis"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask MaizBaan_Ai"
                    />
                    <div className="flex gap-4 items-center">
                        {input && (
                            <button type="submit" className="p-2">
                                <VscSend className="text-xl cursor-pointer" onClick={sendPrompt} />
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-center text-lg text-gray-50 font-bold my-2">
                    MaizBaan_Ai can make mistakes, so double-check it
                </p>
            </div>
        </div>

    );
};

export default Main;
