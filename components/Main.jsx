// import React, { useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
// import { GrMicrophone } from 'react-icons/gr';
// import { VscSend } from 'react-icons/vsc';
// import axios from 'axios';

// const Main = () => {
//     const [input, setInput] = useState('');
//     const [responseContent, setResponseContent] = useState('');
//     const [loading, setLoading] = useState(false);

//     const sendPrompt = async (input) => {
//         try {
//             setLoading(true);
//             const response = await axios.post(
//                 'http://127.0.0.1:8000/api/v1/conversations/chats?agency_id=1&user_id=1',
//                 { user_prompt: input },
//                 { headers: { 'Content-Type': 'application/json' } }
//             );
//             setResponseContent(response.data.content);
//             setInput(''); // Clear the input field
//         } catch (error) {
//             console.error('Error sending prompt:', error);
//             alert('Failed to fetch response. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className='flex-1 min-h-screen pb-[15vh] relative'>
//             {/* Header */}
//             <div className='flex text-xl p-5 text-slate-700 justify-between'>
//                 <p className='text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold'>
//                     Travel Ai
//                 </p>
//                 <FaRegUserCircle className='text-2xl text-gray-200 mr-2' />
//             </div>

//             {/* Main Content */}
//             <div className='max-w-[900px] mx-auto'>
//                 {/* Conditional Rendering */}
//                 {responseContent ? (
//                     <div className='py-10 px-[5%]  scrollbar-hide'>
//                         {loading ? (
//                              <div className='w-full flex flex-col gap-2'>
//                              <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
//                              <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
//                              <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
//                          </div>
//                         ) : (
//                             <div className='text-lg font-[400] leading-relaxed'>{responseContent}</div>
//                         )}
//                     </div>
//                 ) : (
//                     <>
//                         {/* Greeting and Options Grid */}
//                         <div className='my-12 text-[56px] font-semibold text-slate-500 p-5'>
//                             <p>
//                                 <span className='bg-gradient-to-r from-[#2d8890] via-[#ab838a] to-[#c65366] bg-clip-text text-transparent'>
//                                     Hello, Faizan.
//                                 </span>
//                             </p>
//                             <p className='text-slate-400'>How can I help you today?</p>
//                         </div>

//                         {/* Options Grid */}
//                         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5'>
//                             <div className='h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
//                                 <p className='text-slate-700 text-lg'>Suggest top 10 webseries</p>
//                             </div>
//                             <div className='h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
//                                 <p className='text-slate-700 text-lg'>What is loop in JS</p>
//                             </div>
//                             <div className='h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
//                                 <p className='text-slate-700 text-lg'>What’s the weather like today?</p>
//                             </div>
//                             <div className='h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
//                                 <p className='text-slate-700 text-lg'>What are the main goals of the United Nations?</p>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Input Area */}
//             <div className='absolute bottom-0 w-full max-w-full px-5 mx-auto'>
//                 <div className='flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full'>
//                     <input
//                         className='flex-1 bg-transparent border-none outline-none p-2 text-lg placeholder:text-gray-500 placeholder:font-bold'
//                         type='text'
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         placeholder='Ask TravelAi'
//                     />
//                     <div className='flex gap-4 items-center'>
//                         <MdOutlineAddPhotoAlternate className='text-xl cursor-pointer' />
//                         <GrMicrophone className='text-xl cursor-pointer' />
//                         {input && (
//                             <VscSend
//                                 className='text-xl cursor-pointer'
//                                 onClick={() => sendPrompt(input)}
//                             />
//                         )}
//                     </div>
//                 </div>
//                 <p className='text-center text-sm text-gray-600'>TravelAi can make mistakes, so double-check it</p>
//             </div>
//         </div>
//     );
// };

// export default Main;

// import React, { useState } from 'react';
// import { FaRegUserCircle } from 'react-icons/fa';
// import { MdOutlineAddPhotoAlternate } from 'react-icons/md';
// import { GrMicrophone } from 'react-icons/gr';
// import { VscSend } from 'react-icons/vsc';
// import axios from 'axios';

// const Main = () => {
//     const [input, setInput] = useState('');
//     const [responseContent, setResponseContent] = useState('');
//     const [loading, setLoading] = useState(false);

//     //localmachine destructure token : userId and agencyId

//     // Delay function for word-by-word display
//     const delayPara = (index, nextWord) => {
//         setTimeout(() => {
//             setResponseContent((prev) => prev + nextWord);
//         }, 75 * index); // Adjust delay time as needed
//     };

//     // Function to process markdown-style formatting to HTML
//     const formatResponse = (text) => {
//         let formattedText = text
//             .replace(/#\s(.*?)\n/g, '<h1>$1</h1>') // Replace # headers
//             .replace(/##\s(.*?)\n/g, '<h2>$1</h2>') // Replace ## headers
//             .replace(/###\s(.*?)\n/g, '<h3>$1</h3>') // Replace ### headers
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Replace bold
//             .replace(/---/g, '<hr/>') // Replace horizontal line
//             .replace(/\n/g, '<br/>'); // Replace line breaks
//         return formattedText;
//     };

//     const sendPrompt = async (input) => {
//         if (!input.trim()) return; // Prevent sending empty input
//         setResponseContent(''); // Clear previous response
//         setLoading(true); // Set loading to true when request starts

//         try {
//             const response = await axios.post(
//                 'http://127.0.0.1:8000/api/v1/conversations/chats?agency_id=1&user_id=1',
//                 { user_prompt: input },
//                 { headers: { 'Content-Type': 'application/json' } }
//             );

//             // Get response text
//             const responseText = response.data.content;

//             // Format the response with HTML tags
//             const formattedText = formatResponse(responseText);

//             // Split response into words for word-by-word display
//             const responseWords = formattedText.split(' ');

//             responseWords.forEach((word, index) => {
//                 delayPara(index, word + ' ');
//             });
//         } catch (error) {
//             console.error('Error sending prompt:', error);
//             alert('Failed to fetch response. Please try again.');
//         } finally {
//             setLoading(false); // Set loading to false when the request completes
//             setInput(''); // Clear the input field
//         }
//     };

//     return (
//         <div className="flex-1 min-h-screen pb-[15vh] relative">
//             {/* Header */}
//             <div className="flex text-xl p-5 text-slate-700 justify-between">
//                 <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
//                     MaizBaan Ai
//                 </p>
//                 <FaRegUserCircle className="text-2xl text-gray-200 mr-2" />
//             </div>

//             {/* Main Content */}
//             <div className="max-w-[900px] mx-auto">
//                 {loading ? (
//                     <div className="py-10 px-[5%] flex flex-col items-center gap-4">
//                         <div className="w-full flex flex-col gap-2">
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                             <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
//                         </div>
//                         <p className="text-lg font-medium text-gray-500">Fetching response...</p>
//                     </div>
//                 ) : responseContent ? (
//                     <div
//                         className="py-10 px-[5%] scrollbar-hide text-lg  leading-relaxed font-bold"
//                         dangerouslySetInnerHTML={{ __html: responseContent }}
//                     />
//                 ) : (
//                     <>
//                         <div className="my-12 text-[56px] font-semibold text-slate-500 p-5">
//                             <p>
//                                 <span className="bg-gradient-to-r from-[#2d8890] via-[#ab838a] to-[#c65366] bg-clip-text text-transparent">
//                                     Hello, Faizan.
//                                 </span>
//                             </p>
//                             <p className="text-slate-400">How can I help you today?</p>
//                         </div>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
//                             <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                                 <p className="text-slate-700 text-lg">Give me a travel package of 3 days for kashmir</p>
//                             </div>
//                             <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                                 <p className="text-slate-700 text-lg">Give me a travel package for Ladakh</p>
//                             </div>
//                             <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                                 <p className="text-slate-700 text-lg">What’s the weather like today at Ladakh?</p>
//                             </div>
//                             <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
//                                 <p className="text-slate-700 text-lg">What are the main goals of tourism at Kashmir?</p>
//                             </div>
//                         </div>
//                     </>
//                 )}
//             </div>

//             {/* Input Area */}
//             <div className="absolute bottom-0 w-full max-w-full px-5 mx-auto">
//                 <div className="flex items-center justify-between gap-10 bg-transparent border border-black shadow-lg py-2 px-5 rounded-full">
//                     <input
//                         className="flex-1 bg-transparent border-none outline-none p-2 text-lg placeholder:text-gray-500 placeholder:font-bold focus:ring-2 focus:ring-blue-500 rounded-md"
//                         type="text"
//                         value={input}
//                         onChange={(e) => setInput(e.target.value)}
//                         placeholder="Ask MaizBaan_Ai"
//                     />
//                     <div className="flex gap-4 items-center">
//                         <MdOutlineAddPhotoAlternate className="text-xl cursor-pointer" aria-label="Add Photo" />
//                         <GrMicrophone className="text-xl cursor-pointer" aria-label="Microphone" />
//                         {input && (
//                             <VscSend
//                                 className="text-xl cursor-pointer"
//                                 onClick={() => sendPrompt(input)}
//                             />
//                         )}
//                     </div>
//                 </div>
//                 <p className="text-center text-lg text-gray-50 font-bold my-2">
//                     MaizBaan_Ai can make mistakes, so double-check it
//                 </p>
//             </div>

//         </div>
//     );
// };

// export default Main;

//this is my code that will have extracted tokens from authtokens , first i am trying , the above one is working one
import React, { useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GrMicrophone } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
import axios from "axios";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Main = () => {
  const [input, setInput] = useState("");
  const [responseContent, setResponseContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [agencyId, setAgencyId] = useState("");

  // Extract userId and agencyId from authToken
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1])); // Decode JWT payload
        setUserId(payload.id || ""); // Extract and set userId
        setAgencyId(payload.agencyId || ""); // Extract and set agencyId
      } catch (error) {
        console.error("Failed to decode token:", error);
      }
    } else {
      console.warn("No auth token found in localStorage");
    }
  }, []);

  // Delay function for word-by-word display
  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResponseContent((prev) => prev + nextWord);
    }, 75 * index); // Adjust delay time as needed
  };

  // Function to process markdown-style formatting to HTML
  // const formatResponse = (text) => {
  //     return text
  //         .replace(/#\s(.*?)\n/g, '<h1 style="color:#2d8890; font-size:24px; font-weight:bold;">$1</h1>') // H1
  //         .replace(/##\s(.*?)\n/g, '<h2 style="color:#ab838a; font-size:20px; font-weight:bold;">$1</h2>') // H2
  //         .replace(/###\s(.*?)\n/g, '<h3 style="color:#c65366; font-size:18px; font-weight:bold;">$1</h3>') // H3
  //         .replace(/\*\*(.*?)\*\*/g, '<strong style="color:#333;">$1</strong>') // Bold
  //         .replace(/---/g, '<hr style="border: 0; border-top: 1px solid #ddd; margin: 1em 0;"/>') // Horizontal rule
  //         .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1" style="max-width:100%; margin:1em 0;"/>') // Images
  //         .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" style="color:#007BFF;">$1</a>') // Links
  //         .replace(/\*\s(.*?)\n/g, '<li style="margin-left:20px;">$1</li>') // List items
  //         .replace(/\n/g, '<br/>'); // Line breaks
  // };

  const formatResponse = (text) => {
    return text
      .replace(/#\s(.*?)\n/g, "<h1>$1</h1>") // H1
      .replace(/##\s(.*?)\n/g, "<h2>$1</h2>") // H2
      .replace(/###\s(.*?)\n/g, "<h3>$1</h3>") // H3
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Bold
      .replace(/---/g, "<hr/>") // Horizontal rule
      .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1"/>') // Images
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') // Links
      .replace(/\*\s(.*?)\n/g, "<li>$1</li>") // List items
      .replace(/\n/g, "<br/>"); // Line breaks
  };

  // Function to send the user input to the API
  const sendPrompt = async () => {
    if (!input.trim()) return; // Prevent sending empty input
    setResponseContent(""); // Clear previous response
    setLoading(true); // Set loading to true when request starts

    try {
      const response = await axios.post(
        `http://127.0.0.1:8000/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId}`,
        { user_prompt: input },
        { headers: { "Content-Type": "application/json" } }
      );

      // Get response text
      const responseText = response.data.content;

      // Format the response with HTML tags
      const formattedText = formatResponse(responseText);

      // Split response into words for word-by-word display
      const responseWords = formattedText.split(" ");

      responseWords.forEach((word, index) => {
        delayPara(index, word + " ");
      });
    } catch (error) {
      console.error("Error sending prompt:", error);
      alert("Failed to fetch response. Please try again.");
    } finally {
      setLoading(false); // Set loading to false when the request completes
      setInput(""); // Clear the input field
    }
  };

  // export to pdf function

  // const exportToPDF = () => {
  //     const element = document.getElementById("responseContent"); // The container you want to export

  //     html2canvas(element).then((canvas) => {
  //         const imgData = canvas.toDataURL("image/png");
  //         const pdf = new jsPDF("p", "mm", "a4");

  //         const pageWidth = pdf.internal.pageSize.getWidth();
  //         const pageHeight = pdf.internal.pageSize.getHeight();

  //         const imgWidth = pageWidth;
  //         const imgHeight = (canvas.height * pageWidth) / canvas.width;

  //         let y = 0; // Starting position for the first page

  //         while (y < imgHeight) {
  //             pdf.addImage(
  //                 imgData,
  //                 "PNG",
  //                 0,
  //                 -y, // Offset for the current page
  //                 imgWidth,
  //                 imgHeight
  //             );
  //             y += pageHeight; // Move to the next page
  //             if (y < imgHeight) {
  //                 pdf.addPage();
  //             }
  //         }

  //         pdf.save("output.pdf");
  //     });
  // };

  const exportToPDF = () => {
    const element = document.getElementById("responseContent"); // The container you want to export

    html2canvas(element, { scale: 2 })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4");

        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = pageWidth;
        const imgHeight = (canvas.height * pageWidth) / canvas.width;

        let y = 0; // Starting y-coordinate for content placement
        let contentHeightLeft = imgHeight; // Remaining content height to render

        while (contentHeightLeft > 0) {
          pdf.addImage(
            imgData,
            "PNG",
            0,
            y === 0 ? 0 : 0 - y, // Adjust for page breaks
            imgWidth,
            imgHeight
          );
          contentHeightLeft -= pageHeight; // Reduce content height left
          y += pageHeight; // Move y-coordinate for the next page
          if (contentHeightLeft > 0) {
            pdf.addPage();
          }
        }

        pdf.save("output.pdf");
      })
      .catch((error) => {
        console.error("Error generating PDF:", error);
        alert("Failed to generate PDF. Please try again.");
      });
  };

  return (
    <div className="flex-1 min-h-screen pb-[15vh] relative m-3">
      {/* Header */}
      <div className="flex text-xl p-5 text-slate-700 justify-between">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
          MaizBaan Ai
        </p>
        <FaRegUserCircle className="text-2xl text-gray-200 mr-2" />
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
            <p className="text-lg font-medium text-gray-500">
              Fetching response...
            </p>
          </div>
        ) : responseContent ? (
          <>
            <div
              id="responseContent"
              className="py-10 px-[5%] text-lg leading-relaxed font-bold"
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                padding: "20px",
                marginBottom: "20px",
              }}
              dangerouslySetInnerHTML={{ __html: responseContent }}
            />
            <button
              onClick={exportToPDF}
              className="bg-red-500 text-white p-2 rounded"
            >
              Download as PDF
            </button>
          </>
        ) : (
          <>
            <div className="my-12 text-[56px] font-semibold text-slate-500 p-5">
              <p>
                <span className="bg-gradient-to-r from-[#2d8890] via-[#ab838a] to-[#c65366] bg-clip-text text-transparent">
                  Hello, Faizan.
                </span>
              </p>
              <p className="text-slate-400">How can I help you today?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
              <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                  Give me a travel package of 3 days for Kashmir
                </p>
              </div>
              <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                  Give me a travel package for Ladakh
                </p>
              </div>
              <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                  What’s the weather like today at Ladakh?
                </p>
              </div>
              <div className="h-[200px] p-4 bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300">
                <p className="text-slate-700 text-lg">
                  What are the main goals of tourism at Kashmir?
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Input Area */}
      <div className="absolute bottom-0 w-full max-w-full px-5 mx-auto my-[-15px]">
        <div className="flex items-center justify-between gap-10 bg-transparent border border-black shadow-lg py-2 px-5 rounded-full">
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
