// import React, { useContext, useState } from 'react'
// import { IoMenu } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa";
// import { FiMessageSquare } from "react-icons/fi";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { MdHistory, MdOutlineSettings } from "react-icons/md";
// import { AppContext } from '../context/AppContext';
// // import { Context } from '../context/Context';

// const SideBar = () => {
//     const [extended, setExtended] = useState(false)
//     // const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context)
//         const {userName,prevPrompt, setPrevPrompt,setInput} = useContext(AppContext)
    
//     const loadPrompt = async (prompt) => {

//         // setRecentPrompt(prompt)

//         // await onSent(prompt)

//     }

    
//     return (
//         <div className=' min-h-screen inline-flex flex-col justify-between  py-[25px] px-[15px]'>
//             <div className=''>
//                 <IoMenu className='text-2xl block cursor-pointer' onClick={() => setExtended(!extended)} />
//                 <div className='inline-flex mt-2 items-center gap-2 py-2 px-4 text-[14px] rounded-full bg-[#c5bfbf] cursor-pointer text-gray-500'>
//                     <FaPlus />
//                     {extended && <p>New Chat</p>}
//                 </div>
//                 {extended && (
//                     <div className='flex flex-col animate-fadeIn duration 1000'>
//                         <p className='mt-7 mb-5'>Recent</p>
//                         {/* adding condition for recentPrompt */}
//                         {prevPrompt?.map((item, index) => {
//                             return (
//                                 <div onClick={() => setInput(item)} className='inline-flex items-center gap-4 my-2 p-2 pr-10 rounded-[50px] cursor-pointer text-blue hover:bg-gray-400'>
//                                     <FiMessageSquare />
//                                     {extended && <p>{item.user_message.slice(0, 18)}...</p>}
//                                 </div>
//                             )
//                         })}

//                         <div className='inline-flex items-center gap-4 my-2 p-2 pr-10 rounded-[50px] cursor-pointer text-gray-200 hover:bg-gray-400'>
//                         <FiMessageSquare />
//                         {extended && <p>A Friendly Greeting</p>}
//                     </div>
//                     </div>
//                 )}
//             </div>
//             {/* another bottom fiv */}
//             <div className='flex flex-col'>
//                 <div className='inline-flex items-center gap-4 my-1 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <FaRegQuestionCircle />
//                     {extended && <p>Help</p>}

//                 </div>
//                 <div className='inline-flex items-center gap-4  p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <MdHistory />
//                     {extended && <p>Activity</p>}

//                 </div><div className='inline-flex items-center gap-4  p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <MdOutlineSettings />
//                     {extended && <p>Settings</p>}

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default SideBar

// import React, { useState } from "react";
// import { AppContext } from "../context/AppContext"; // Adjust import path as needed

// const SideBar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const { userName, prevPrompt, setInput, setResponseContent } = React.useContext(AppContext);
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 7;

//     // Calculate total pages
//     const totalPages = Math.ceil(prevPrompt?.length / itemsPerPage);

//     // Get items for the current page
//     const currentItems = prevPrompt?.slice(
//         (currentPage - 1) * itemsPerPage,
//         currentPage * itemsPerPage
//     );

//     const handlePrevPage = () => {
//         if (currentPage > 1) setCurrentPage(currentPage - 1);
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//     };

//     const handleOnClick = (item) => {
//         setInput(item.user_message);
//         setResponseContent(item.agent_response);
//         setIsMobileMenuOpen(false);
//     };

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };
//     const formatResponse = (text) => {
//         return text
//             .replace(/#\s(.*?)\n/g, '<h1 style="color: blue; font-size: 24px;">$1</h1>') // H1
//             .replace(/##\s(.*?)\n/g, '<h2 style="color: green;font-size: 22px">$1</h2>') // H2
//             .replace(/###\s(.*?)\n/g, '<h3 style="color: orange;">$1</h3>') // H3
//             .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
//             .replace(/---/g, '<hr/>') // Horizontal rule
//             .replace(/!\[(.*?)\]\((.*?)\)/g, '<img src="$2" alt="$1"/>') // Images
//             .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>') // Links
//             .replace(/\*\s(.*?)\n/g, '<li>$1</li>') // List items
//             .replace(/\n/g, '<br/>') // Line breaks
//             .replace(/(.+?)(?=<br\/>|$)/g, '<span style="color: black;">$1</span>'); // Normal text
//     };

//     return (
//         <>
//             {/* Mobile Menu Toggle Button */}
//             <div className="lg:hidden fixed top-4 left-4 z-50">
//                 {isMobileMenuOpen ? (
//                     <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         className="h-6 w-6 cursor-pointer" 
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         stroke="currentColor"
//                         onClick={toggleMobileMenu}
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 ) : (
//                     <svg 
//                         xmlns="http://www.w3.org/2000/svg" 
//                         className="h-6 w-6 cursor-pointer" 
//                         fill="none" 
//                         viewBox="0 0 24 24" 
//                         stroke="currentColor"
//                         onClick={toggleMobileMenu}
//                     >
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                 )}
//             </div>

//             {/* Sidebar for Desktop and Mobile */}
//             <div className={`
//                 fixed inset-y-0 left-0 w-64 backdrop-blur-lg bg-[#13131323] text-white 
//                 transform transition-transform duration-300 ease-in-out z-40
//                 lg:static lg:translate-x-0 
//                 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
//             `}>
//                 <div className="min-h-screen flex flex-col justify-between py-[25px] px-[15px]">
//                     <div>
//                         {/* <div className="flex mt-2 items-center gap-2 py-2 px-4 text-[14px] rounded-full bg-[#c5bfbf] cursor-pointer text-gray-500">
//                             <svg 
//                                 xmlns="http://www.w3.org/2000/svg" 
//                                 className="h-4 w-4" 
//                                 fill="none" 
//                                 viewBox="0 0 24 24" 
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                             </svg>
//                             <p>New Chat</p>
//                         </div> */}
                        
//                         <div className="mt-4">
//                             <p className="mt-7 mb-5">Recent</p>
//                             <ul className="flex flex-col gap-2">
//                                 {currentItems?.map((item, index) => (
//                                     <li
//                                         key={index}
//                                         onClick={() => handleOnClick(item)}
//                                         className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-blue hover:bg-gray-400"
//                                     >
//                                         <svg 
//                                             xmlns="http://www.w3.org/2000/svg" 
//                                             className="h-5 w-5" 
//                                             fill="none" 
//                                             viewBox="0 0 24 24" 
//                                             stroke="currentColor"
//                                         >
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//                                         </svg>
//                                         <p>{item.user_message.slice(0, 18)}...</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                             <div className="flex justify-between mt-4">
//                                 <button
//                                     onClick={handlePrevPage}
//                                     disabled={currentPage === 1}
//                                     className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
//                                 >
//                                     Previous
//                                 </button>
//                                 <button
//                                     onClick={handleNextPage}
//                                     disabled={currentPage === totalPages}
//                                     className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
//                                 >
//                                     Next
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div className="flex flex-col">
//                         <div className="flex items-center gap-4 my-1 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
//                             <svg 
//                                 xmlns="http://www.w3.org/2000/svg" 
//                                 className="h-5 w-5" 
//                                 fill="none" 
//                                 viewBox="0 0 24 24" 
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <p>Help</p>
//                         </div>
//                         <div className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
//                             <svg 
//                                 xmlns="http://www.w3.org/2000/svg" 
//                                 className="h-5 w-5" 
//                                 fill="none" 
//                                 viewBox="0 0 24 24" 
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                             </svg>
//                             <p>Activity</p>
//                         </div>
//                         <div className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
//                             <svg 
//                                 xmlns="http://www.w3.org/2000/svg" 
//                                 className="h-5 w-5" 
//                                 fill="none" 
//                                 viewBox="0 0 24 24" 
//                                 stroke="currentColor"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                             </svg>
//                             <p>Settings</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Overlay for mobile menu */}
//             {isMobileMenuOpen && (
//                 <div 
//                     className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" 
//                     onClick={toggleMobileMenu}
//                 />
//             )}
//         </>
//     );
// };

// export default SideBar;


import React, { useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
const SideBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { userName, prevPrompt, setInput, setResponseContent } = React.useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Calculate total pages
    const totalPages = Math.ceil(prevPrompt?.length / itemsPerPage);

    // Get items for the current page
    const currentItems = prevPrompt?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
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

    const handleOnClick = (item) => {
        setInput(item.user_message);
        setResponseContent(formatResponse(item.agent_response));
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden fixed top-4 left-4 z-50">
                {isMobileMenuOpen ? (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        onClick={toggleMobileMenu}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 cursor-pointer" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        onClick={toggleMobileMenu}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </div>

            {/* Sidebar for Desktop and Mobile */}
            <div className={`
                fixed inset-y-0 left-0 w-64 backdrop-blur-lg bg-[#13131323] text-white 
                transform transition-transform duration-300 ease-in-out z-40
                lg:static lg:translate-x-0 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <div className="min-h-screen flex flex-col justify-between py-[25px] px-[15px]">
                    <div>
                        <div className="mt-4">
                            <p className="mt-7 mb-5">Recent</p>
                            <ul className="flex flex-col gap-2">
                                {currentItems?.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => handleOnClick(item)}
                                        className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400"
                                    >
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-5 w-5" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <p>{item.user_message.slice(0, 18)}...</p>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex justify-between mt-4">
                                <button
                                    onClick={handlePrevPage}
                                    disabled={currentPage === 1}
                                    className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col">
      {/* Contact */}
      <Link
        to="/contact" // Path for the Contact page
        className="flex items-center gap-4 my-1 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8c0-2.21-1.343-4-3-4S10 5.79 10 8c0 1.1.45 2.1 1.19 2.83M8 17c0 1.5.6 2.75 1.5 3.5 1 .75 2.5 1.5 4.5 1.5s3.5-.75 4.5-1.5c.9-.75 1.5-2 1.5-3.5H8z"
          />
        </svg>
        <p>Contact</p>
      </Link>

      {/* About */}
      <Link
        to="/about" // Path for the About page
        className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1 4h-1v-4h1m1-4h-1v4h1m4 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p>About</p>
      </Link>

      {/* Team */}
      <Link
        to="/team" // Path for the Team page
        className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5V9a1 1 0 00-1-1h-3M8 20H3V9a1 1 0 011-1h3M12 20v-8m-4 4a4 4 0 008 0M12 4a4 4 0 100 8 4 4 0 000-8z"
          />
        </svg>
        <p>Team</p>
      </Link>
    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" 
                    onClick={toggleMobileMenu}
                />
            )}
        </>
    );
};

export default SideBar;