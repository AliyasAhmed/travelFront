

//this is my code that will have extracted tokens from authtokens , first i am trying , the above one is working one
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
    const [showProfile, setShowProfile] = useState(false);
    const [chatHistory,setChatHistory]= useState([])
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    
    const {userName, setPrevPrompt,input, setInput, responseContent, setResponseContent} = useContext(AppContext)



    useEffect(() => {
        const fetchChatHistory = async () => {
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
    
                // Fetch chat history
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/v1/conversations/conversations`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );
    
                console.log("conversation response", response.data.data);
                setChatHistory(response.data.data); // Update `chatHistory`
            } catch (error) {
                console.error('Error fetching chat history:', error.message);
            }
        };
    
        fetchChatHistory();
    }, []);
    
    // another
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
        .replace(/#\s(.*?)\n/g, '<h1 style="color: blue; font-size: 24px;">$1</h1>') // H1

            .replace(/##\s(.*?)\n/g, '<h2 style="color: green;font-size: 22px">$1</h2>') // H2
            .replace(/###\s(.*?)\n/g, '<h3 style="color: orange;">$1</h3>') // H3
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
            .replace(/---/g, '<hr/>') // Horizontal rule
            .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1"/>') // Images
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') // Links
            .replace(/\*\s(.*?)\n/g, '<li>$1</li>') // List items
            .replace(/\n/g, '<br/>') // Line breaks
            .replace(/(.+?)(?=<br\/>|$)/g, '<span style="color: black;">$1</span>'); // Normal text
    };



    // Function to send the user input to the API
    const sendPrompt = async () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.warn('No auth token found in localStorage');
            navigate('/login');
            return;
        }
        if (!input.trim()) return;

        // Clear previous response and set loading state
        setResponseContent('');
        setLoading(true);

        try {
            // Log token and user details for debugging
            console.log('Token:', token);
            console.log('User ID:', userId);
            console.log('Agency ID:', agencyId);

            // Axios POST request with proper payload and headers
            const response = await axios.post(
                `http://127.0.0.1:8000/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId}`,
                { user_prompt: input }, // Corrected payload
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.trim()}`, // Proper Authorization header
                    },
                }
            );
            

            // Handle the response and format the text
            const responseText = response.data.content;
            const formattedText = formatResponse(responseText);
            const responseWords = formattedText.split(' ');

            // Display the response word by word with a delay
            responseWords.forEach((word, index) => {
                delayPara(index, word + ' ');
            });
            
        } catch (error) {
            // Log error response for debugging
            console.error('Error response:', error.response ? error.response.data : error.message);
            alert('Failed to fetch response. Please try again.');
        } finally {
            // Reset loading state and clear input field
            setLoading(false);
            setInput('');
            // setPrevPrompt((prev) => [...prev, input])

        }
    };



    // export to pdf function
    // working
    // const exportToPDF = () => {
    //     const element = document.getElementById("responseContent"); // The container you want to export

    //     html2canvas(element, { scale: 2 }).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/png");
    //         const pdf = new jsPDF("p", "mm", "a4");

    //         const pageWidth = pdf.internal.pageSize.getWidth();
    //         const pageHeight = pdf.internal.pageSize.getHeight();

    //         const imgWidth = pageWidth;
    //         const imgHeight = (canvas.height * pageWidth) / canvas.width;

    //         let y = 0; // Starting y-coordinate for content placement
    //         let contentHeightLeft = imgHeight; // Remaining content height to render

    //         while (contentHeightLeft > 0) {
    //             pdf.addImage(
    //                 imgData,
    //                 "PNG",
    //                 0,
    //                 y === 0 ? 0 : 0 - y, // Adjust for page breaks
    //                 imgWidth,
    //                 imgHeight
    //             );
    //             contentHeightLeft -= pageHeight; // Reduce content height left
    //             y += pageHeight; // Move y-coordinate for the next page
    //             if (contentHeightLeft > 0) {
    //                 pdf.addPage();
    //             }
    //         }

    //         pdf.save("output.pdf");
    //     }).catch((error) => {
    //         console.error("Error generating PDF:", error);
    //         alert("Failed to generate PDF. Please try again.");
    //     });

    // };

    // try one working with header and logo but half pages
    // const exportToPDF = () => {
    //     const element = document.getElementById("responseContent");

    //     html2canvas(element, { scale: 2 }).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/jpeg", 0.8); // Use JPEG for compression
    //         const pdf = new jsPDF("p", "mm", "a4");

    //         const pageWidth = pdf.internal.pageSize.getWidth();
    //         const pageHeight = pdf.internal.pageSize.getHeight();
    //         const imgWidth = pageWidth;
    //         const imgHeight = (canvas.height * pageWidth) / canvas.width;

    //         // Add header and logo
    //         pdf.setFontSize(18);
    //         pdf.text("MaizBaan AI - Report", 10, 10);
    //         const logo = "../src/assets/logo.jpg"; // Replace with the path to your logo
    //         pdf.addImage(logo, "PNG", 170, 5, 30, 10); // Adjust the dimensions and position of the logo

    //         // Add content
    //         let y = 20; // Start below the header
    //         let contentHeightLeft = imgHeight;

    //         while (contentHeightLeft > 0) {
    //             pdf.addImage(
    //                 imgData,
    //                 "JPEG",
    //                 0,
    //                 y,
    //                 imgWidth,
    //                 imgHeight
    //             );
    //             contentHeightLeft -= pageHeight;
    //             y = 0;
    //             if (contentHeightLeft > 0) {
    //                 pdf.addPage();
    //             }
    //         }

    //         pdf.save("output.pdf");
    //     }).catch((error) => {
    //         console.error("Error generating PDF:", error);
    //         alert("Failed to generate PDF. Please try again.");
    //     });
    // };

    //claude generated 
    const exportToPDF = () => {
        const element = document.getElementById("responseContent");
    
        html2canvas(element, { scale: 2 }).then((canvas) => {
            const imgData = canvas.toDataURL("image/jpeg", 0.8);
            const pdf = new jsPDF("p", "mm", "a4");
    
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = pageWidth;
            const imgHeight = (canvas.height * pageWidth) / canvas.width;
    
            // Add header and logo
            const headerHeight = 20; // Reserve space for header
            pdf.setFontSize(20);
            pdf.text("MaizBaan AI - Report", 10, 10);
            const logo = "../src/assets/logo.jpg";
            pdf.addImage(logo, "PNG", 170, 5, 30, 10);
    
            // Calculate number of pages needed
            const contentHeight = imgHeight;
            const pageContentHeight = pageHeight - headerHeight;
            const totalPages = Math.ceil(contentHeight / pageContentHeight);
    
            // Add content across multiple pages
            let remainingHeight = contentHeight;
            let sourceY = 0;
            let currentPage = 0;
    
            while (remainingHeight > 0) {
                // Calculate height for current page
                const currentHeight = Math.min(remainingHeight, pageContentHeight);
                
                // Calculate the portion of the image to use
                const sourceHeight = (currentHeight * canvas.height) / imgHeight;
                
                // Create temporary canvas for the current portion
                const tempCanvas = document.createElement('canvas');
                tempCanvas.width = canvas.width;
                tempCanvas.height = sourceHeight;
                const ctx = tempCanvas.getContext('2d');
                
                // Draw portion of original canvas
                ctx.drawImage(
                    canvas,
                    0,
                    sourceY,
                    canvas.width,
                    sourceHeight,
                    0,
                    0,
                    canvas.width,
                    sourceHeight
                );
    
                // Convert to image data
                const pageImgData = tempCanvas.toDataURL("image/jpeg", 0.8);
    
                // Add to PDF
                pdf.addImage(
                    pageImgData,
                    "JPEG",
                    0,
                    currentPage === 0 ? headerHeight : 0, // Account for header on first page
                    imgWidth,
                    currentHeight
                );
    
                // Update variables for next iteration
                remainingHeight -= currentHeight;
                sourceY += sourceHeight;
                
                // Add new page if there's more content
                if (remainingHeight > 0) {
                    pdf.addPage();
                    currentPage++;
                    
                    // Add header to new page
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

console.log(chatHistory)

    return (
        <div className="flex-1 min-h-screen pb-[15vh] relative m-3">
            {/* Header */}
            <div className="flex text-xl p-5 text-slate-700 justify-between relative">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
                    MaizBaan Ai
                </p>
                <FaRegUserCircle className="text-2xl text-gray-200 mr-2" onClick={()=>setShowProfile(!showProfile)}/>
            </div>
            <div className={`${showProfile ? 'showProfilecss show' : 'hideProfilecss'}`}>
              <UserProfileDetails/>
            </div>

            {/* Main Content */}
            <div className="max-w-[900px] mx-auto">
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
                            style={{
                                backgroundColor: "#ffffff",
                                color: "#000000",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                                padding: "20px",
                                marginBottom: "20px",
                                fontFamily: "Arial, sans-serif"
                            }}
                            dangerouslySetInnerHTML={{ __html: responseContent }}
                        />

                        <button onClick={exportToPDF} className="bg-red-500 text-white p-2 rounded">
                            Download as PDF
                        </button>

                    </>

                ) : (
                    <>
                        <div className="my-12 text-[56px] font-semibold text-slate-500 p-5">
                            <p>
                                <span className="bg-gradient-to-r from-[#2d8890] via-[#ab838a] to-[#c65366] bg-clip-text text-transparent">
                                    Hello, {userName}.
                                </span>
                            </p>
                            <p className="text-slate-400">How can I help you today?</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                            <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                                <p className="text-slate-700 text-lg">Give me a travel package of 3 days for Kashmir</p>
                            </div>
                            <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                                <p className="text-slate-700 text-lg">Give me a travel package for Ladakh</p>
                            </div>
                            <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                                <p className="text-slate-700 text-lg">What’s the weather like today at Ladakh?</p>
                            </div>
                            <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                                <p className="text-slate-700 text-lg">What are the main goals of tourism at Kashmir?</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="absolute bottom-0 w-full max-w-full px-5 mx-auto my-[-15px]">
                <div className="flex items-center justify-between gap-10 border border-[#4b4b4b85] backdrop-blur-lg bg-[#00000062] shadow-lg py-2 px-5 rounded-full">
                    <input
                        className="flex-1 bg-transparent border-none outline-none p-2 text-lg placeholder:text-gray-500 placeholder:font-bold focus:ring-2 focus:ring-blue-500 rounded-md"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask MaizBaan_Ai"
                    />
                    <div className="flex gap-4 items-center">
                        {/* <MdOutlineAddPhotoAlternate className="text-xl cursor-pointer" aria-label="Add Photo" />
                        <GrMicrophone className="text-xl cursor-pointer" aria-label="Microphone" /> */}
                        {input && (
                            <VscSend
                                className="text-xl cursor-pointer"
                                onClick={sendPrompt}
                            />
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


