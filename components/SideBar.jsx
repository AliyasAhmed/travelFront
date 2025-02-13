

import React, { useState } from "react";
import { AppContext } from "../context/AppContext";
import AuthSection from "./AuthSection";

const SideBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { setInput, setResponseContent, sessions, setCurrentSessionIndex, currentSessionIndex, setSessions } = React.useContext(AppContext);
    
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    
    const categorizedSessions = {
        today: [],
        yesterday: [],
        older: []
    };

    sessions.forEach(session => {
        const sessionDate = new Date(session.timestamp).toDateString();
        if (sessionDate === today) {
            categorizedSessions.today.push(session);
        } else if (sessionDate === yesterday) {
            categorizedSessions.yesterday.push(session);
        } else {
            categorizedSessions.older.push(session);
        }
    });

    const clearChatHistory = () => {
        setSessions([]);
        setInput("");
        setResponseContent("");
        setCurrentSessionIndex(null);
    };
    
    return (
        <>
            <div className="lg:hidden fixed top-6 left-4 z-50 ">
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsMobileMenuOpen(false)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setIsMobileMenuOpen(true)}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
            </div>

            <div className={`border border-gray fixed inset-y-0 left-0 w-64 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 lg:static lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="max-h-screen flex flex-col justify-between py-5 px-4 ">
                    <div>
                        <p className="mt-7 mb-5 text-center text-xl">Recent Sessions</p>
                        <div className="max-h-[70vh] overflow-hidden relative">
                            {Object.entries(categorizedSessions).map(([category, sessions]) => (
                                sessions.length > 0 && (
                                    <div key={category}>
                                        <p className="text-lg font-bold mt-3">{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                                        <ul className="flex flex-col gap-2 overflow-y-auto max-h-[70vh]">
                                            {sessions.map((session, index) => (
                                                <li key={session.id} onClick={() => setCurrentSessionIndex(session.id)} className={`flex flex-col gap-1 p-2 rounded-lg cursor-pointer text-white hover:bg-gray-400 ${currentSessionIndex === session.id ? 'bg-gray-500' : ''}`}>
                                                    <p className="font-bold text-lg">Session {session.id}</p>
                                                    <p className="font-semibold">{session.messages[0]?.content.slice(0, 18)}...</p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                    <div className="p-4">
                        <button onClick={clearChatHistory} className="w-full px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500">
                            Clear Chat History
                        </button>
                        <div className="fixed bottom-[8rem] lg:bottom-[10rem] ">

                    <AuthSection/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SideBar;