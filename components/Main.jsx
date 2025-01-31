import React, { useState, useEffect, useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
import { GrMicrophone } from 'react-icons/gr';
import { VscSend } from 'react-icons/vsc';
import axios from 'axios';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toast, ToastContainer } from "react-toastify";

import { AppContext } from '../context/AppContext';
import UserProfileDetails from './UserProfileDetails';
import Login from '../src/Pages/Login';
import { useNavigate } from 'react-router-dom';
import { send } from 'vite';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [agencyId, setAgencyId] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [userInputHistory, setUserInputHistory] = useState('');
    const [images, setImages] = useState([]); // State to store image URLs
    const navigate = useNavigate();

    const { userName, setPrevPrompt, input, setInput, responseContent, setResponseContent, showProfile, setShowProfile } = useContext(AppContext);

    // Extract userId and agencyId from token
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
                toast.error('Session expired. Please login again.');
                localStorage.removeItem('userName');
                localStorage.removeItem('prevPrompt');
                localStorage.removeItem('UserNumber');
                return;
            }

            setUserId(payload.id || '');
            setAgencyId(payload.agencyId || '');
        } catch (error) {
            console.error('Error decoding token:', error.message);
        }
    }, []);

    // Fetch chat history
    useEffect(() => {
        const fetchChatHistory = async () => {
            if (!userId || !agencyId) return;

            try {
                const response = await axios.get(
                    `https://api.maizbaan.ai/api/v1/conversations/conversations/user/${userId}`,
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token.trim()}`,
                        },
                    }
                );
                // console.log("conversation token", token);
                setChatHistory(response.data);
            } catch (error) {
                console.error('Error fetching chat history:', error.message);
            }
        };

        fetchChatHistory();
    }, [userId, agencyId, token]);

    useEffect(() => {
        setPrevPrompt(chatHistory);
    }, [chatHistory]);


    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResponseContent((prev) => prev + nextWord);
        }, 75 * index); // Delay each word by 75ms * index
    };


    // Format response text and include images
    const formatResponse = (text, images) => {
        let formattedText = text
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

        // Append images from the response
        if (images && images.length > 0) {
            images.forEach((imageUrl, index) => {
                formattedText += `<img src="${imageUrl}" alt="Image ${index + 1}" style="max-width: 100%; margin: 10px 0;"/>`;
            });
        }

        return formattedText;
    };

    // Send prompt to the server
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
        setUserInputHistory(input);

        try {
            const response = await axios.post(
                `https://api.maizbaan.ai/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId}`,
                { user_prompt: input },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token.trim()}`,
                    },
                }
            );

            const responseText = response.data.content;
            const responseImages = response.data.image_url || []; // Extract image URLs
            setImages(responseImages); // Store images in state
            const formattedText = formatResponse(responseText, responseImages);
            // setResponseContent(formattedText); // Directly set the formatted text without delay loop

            // Simulate typing effect for the response
            const words = formattedText.split(' ');
            words.forEach((word, index) => {
                delayPara(index, word + ' ');
            });
        } catch (error) {
            console.error('Error response:', error.response ? error.response.data : error.message);
            toast.error('Failed to Generate response. Please try again.');
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    // Export content to PDF
    // const exportToPDF = () => {
    //     const element = document.getElementById("responseContent");
    //     html2canvas(element, { scale: 2 }).then((canvas) => {
    //         const imgData = canvas.toDataURL("image/jpeg", 0.8);
    //         const pdf = new jsPDF("p", "mm", "a4");
    //         const pageWidth = pdf.internal.pageSize.getWidth();
    //         const pageHeight = pdf.internal.pageSize.getHeight();
    //         const imgWidth = pageWidth;
    //         const imgHeight = (canvas.height * pageWidth) / canvas.width;

    //         const headerHeight = 20;
    //         pdf.setFontSize(20);
    //         pdf.text("MaizBaan AI - Report", 10, 10);
    //         const logo = "../src/assets/logo.jpg";
    //         pdf.addImage(logo, "PNG", 170, 5, 30, 10);

    //         const contentHeight = imgHeight;
    //         const pageContentHeight = pageHeight - headerHeight;
    //         const totalPages = Math.ceil(contentHeight / pageContentHeight);

    //         let remainingHeight = contentHeight;
    //         let sourceY = 0;
    //         let currentPage = 0;

    //         while (remainingHeight > 0) {
    //             const currentHeight = Math.min(remainingHeight, pageContentHeight);
    //             const sourceHeight = (currentHeight * canvas.height) / imgHeight;
    //             const tempCanvas = document.createElement('canvas');
    //             tempCanvas.width = canvas.width;
    //             tempCanvas.height = sourceHeight;
    //             const ctx = tempCanvas.getContext('2d');
    //             ctx.drawImage(canvas, 0, sourceY, canvas.width, sourceHeight, 0, 0, canvas.width, sourceHeight);
    //             const pageImgData = tempCanvas.toDataURL("image/jpeg", 0.8);

    //             pdf.addImage(pageImgData, "JPEG", 0, currentPage === 0 ? headerHeight : 0, imgWidth, currentHeight);
    //             remainingHeight -= currentHeight;
    //             sourceY += sourceHeight;

    //             if (remainingHeight > 0) {
    //                 pdf.addPage();
    //                 currentPage++;
    //                 pdf.setFontSize(18);
    //                 pdf.text("MaizBaan AI - Report", 10, 10);
    //                 pdf.addImage(logo, "PNG", 170, 5, 30, 10);
    //             }
    //         }

    //         pdf.save("output.pdf");
    //     }).catch((error) => {
    //         console.error("Error generating PDF:", error);
    //         alert("Failed to generate PDF. Please try again.");
    //     });
    // };


    const exportToPDF = () => {
        const element = document.getElementById("responseContent");
        const originalHeight = element.style.height; // Save the original height
        const originalOverflow = element.style.overflow; // Save the original overflow
        element.style.height = "auto"; // Expand to show full content
        element.style.overflow = "visible"; // Ensure no scrollbars

        const pdf = new jsPDF("p", "mm", "a4"); // Create a new PDF instance
        const pageWidth = pdf.internal.pageSize.getWidth(); // Get page width
        const pageHeight = pdf.internal.pageSize.getHeight(); // Get page height
        const margin = 10; // Margin in mm
        const scale = 2; // Scale for better quality

        html2canvas(element, { scale })
            .then((canvas) => {
                const imgData = canvas.toDataURL("image/jpeg", 0.8);
                const imgWidth = pageWidth - 2 * margin; // Adjust image width to fit within margins
                const imgHeight = (canvas.height * imgWidth) / canvas.width; // Calculate image height

                let position = 0; // Track the position of the content

                // Add pages until all content is added
                while (position < imgHeight) {
                    if (position > 0) {
                        pdf.addPage(); // Add a new page if content exceeds the current page
                    }

                    // Add the image to the PDF
                    pdf.addImage(
                        imgData,
                        "JPEG",
                        margin,
                        margin - position,
                        imgWidth,
                        imgHeight
                    );

                    position += pageHeight - 2 * margin; // Move the position for the next page
                }

                pdf.save("output.pdf"); // Save the PDF
            })
            .catch((error) => {
                console.error("Error generating PDF:", error);
                alert("Failed to generate PDF. Please try again.");
            })
            .finally(() => {
                // Restore original styles
                element.style.height = originalHeight;
                element.style.overflow = originalOverflow;
            });
    };


    const maxLength = 100; // Maximum character limit

    const handleInputChange = (e) => {
        const value = e.target.value;
        if (value.length <= maxLength) {
            setInput(value);
        }
    };

    const isExceeded = input.length > maxLength; // Check if limit is exceeded

    return (
        <div className="flex-1  pb-[15vh] relative m-3">
            <ToastContainer />
            {/* Header */}
            <div className="flex text-xl p-5 text-slate-700 justify-between relative">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
                    MaizBaan Ai
                </p>
            </div>

            {/* User Input History */}
            {userInputHistory && (
                <div className="bg-white text-gray-800 p-3 rounded-lg shadow-md mb-4 flex items-center gap-2">
                    <strong><FaRegUserCircle className='text-2xl  mr-4' /></strong> {userInputHistory}
                </div>
            )}

            {/* User Profile Details */}
            {showProfile && (
                <div
                    className="absolute z-[9999] top-[-70px] right-[-20px] md:right-[50px]"
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
                        <p className="text-lg font-medium text-gray-500">Generating response...</p>
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
                                height: 'auto',
                                overflow: 'scroll',
                                overflowX: 'hidden',
                            }}
                            dangerouslySetInnerHTML={{ __html: responseContent }}
                        />
                        <button
                            onClick={exportToPDF}
                            className=" bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-800 font-bold p-2 rounded mb-10"
                        >
                            Download as PDF
                        </button>
                        {/* {images.map((imageUrl, index) => (
                            <a
                                key={index}
                                href={imageUrl}
                                download={`image_${index + 1}.png`}
                                className="bg-blue-500 text-white p-2 rounded mb-2 block"
                            >
                                Download Image {index + 1}
                            </a>
                        ))} */}
                    </>
                ) : (
                    <>
                        <div className=" text-[56px] font-semibold text-slate-500 px-5">
                            <p
                                className="bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] bg-clip-text text-transparent text-lg md:text-3xl">
                                Hello, {userName}.

                            </p>
                            <p className="text-slate-400 text-3xl">How can I help you today?</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5">
                            {/* Always show this div on all screen sizes */}
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse" onClick={sendPrompt}>
                                <p className="text-slate-700 text-lg">Give me a travel package of 3 days for Kashmir</p>
                            </div>

                            {/* Show this div on small screens and above */}
                            <div className="h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Give me a travel package for Ladakh</p>
                            </div>

                            {/* Show this div only on medium screens and above */}
                            <div className="hidden sm:block h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Where to get best Kashmiri cuisine in Srinagar?</p>
                            </div>

                            {/* Show this div only on medium screens and above */}
                            <div className="hidden sm:block h-[150px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300 animate-pulse">
                                <p className="text-slate-700 text-lg">Give me 3 days travel package for Gulmarg Kashmir.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>

            {/* Input Area */}
            <div className="absolute sm:bottom-5 md:bottom-0 w-full max ">
                <div className="flex items-center justify-between gap-5 border border-[#4b4b4b85] backdrop-blur-lg bg-[#00000062] shadow-lg py-2 px-5 rounded-md">
                    <textarea
                        className={`flex-1 bg-transparent border border-gray-300 outline-none p-2 text-lg placeholder:text-gray-500 placeholder:font-bold rounded-md text-ellipsis w-full ${isExceeded ? "border-red-500 text-red-500" : ""
                            }`}
                        type="text"
                        value={input}
                        onChange={handleInputChange}
                        placeholder="Ask MaizBaan"
                        maxLength={maxLength} // Enforce limit
                    />

                    {/* <div className="text-sm mt-1">
                        <span className={isExceeded ? "text-red-500" : ""}>
                            {input.length}/{maxLength}
                        </span>
                        {isExceeded && (
                            <span className="text-red-500 ml-2">
                                Warning: Maximum limit exceeded!
                            </span>
                        )}
                    </div> */}

                    <div className="flex gap-4 items-center">
                        {input && (
                            <button type="submit" className="p-2">
                                <VscSend className="text-xl cursor-pointer" onClick={sendPrompt} />
                            </button>
                        )}
                    </div>
                </div>
                <p className="text-center text-lg text-gray-200 font-bold my-2">
                    MaizBaan can make mistakes
                </p>
            </div>

        </div>

    );
};

export default Main;
