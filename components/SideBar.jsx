import React, { useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
const SideBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { userName, prevPrompt, setInput, setResponseContent, sessions, setCurrentSessionIndex } = React.useContext(AppContext);
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

    const handleSessionClick = (sessionIndex) => {
        setCurrentSessionIndex(sessionIndex);
        if (sessions[sessionIndex].messages.length > 0) {
            setInput(sessions[sessionIndex].messages[0].content);
            setResponseContent(sessions[sessionIndex].messages[1]?.content || "");
        }
    };

    return (
        <>
            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden fixed top-6 left-4 z-50">
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
                        <div className="mt-20 md:mt-5">
                            <p className="mt-7 mb-5">Recent</p>
                            {/* <ul className="flex flex-col gap-2">
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
                            </ul> */}
                            {/* <ul className="flex flex-col gap-2">
                                {sessions.map((session, index) => (
                                    <li key={session.id}
                                        onClick={() => handleSessionClick(index)}
                                        className="flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
                                        <p>Session {index + 1} - {session.messages[0]?.content.slice(0, 18)}...</p>
                                    </li>
                                ))}
                            </ul> */}
                            <ul className="flex flex-col gap-2">
                {sessions.map((session, index) => (
                    <li key={session.id}
                        onClick={() => setCurrentSessionIndex(index)}  // Set active session
                        className="flex flex-col gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
                        <p className="font-bold text-lg">Session {index + 1} </p><p className="font-semibold"> {session.messages[0]?.content.slice(0, 18)}...</p>
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