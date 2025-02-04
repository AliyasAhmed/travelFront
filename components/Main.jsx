import React, { useState, useEffect, useContext, useRef } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { VscSend } from 'react-icons/vsc';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [agencyId, setAgencyId] = useState('');
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    const responseContainerRef = useRef(null);

    // Context for managing sessions
    const { sessions, setSessions, currentSessionIndex } = useContext(AppContext);

    // Load chat history for the selected session
    const chatHistory = sessions[currentSessionIndex]?.messages || [];

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token || isTokenExpired(token)) {
            handleTokenExpiration();
            return;
        }
        setToken(token);

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            setUserId(payload.id || '');
            setAgencyId(payload.agencyId || '');
        } catch {
            handleTokenExpiration();
        }
    }, []);

    // Load chat sessions from localStorage when userId is set
    useEffect(() => {
        if (userId) {
            const storedSessions = JSON.parse(localStorage.getItem(`chatSessions_${userId}`)) || [];
            setSessions(storedSessions);
        }
    }, [userId, setSessions]);

    // Save chat sessions to localStorage
    useEffect(() => {
        if (userId) {
            localStorage.setItem(`chatSessions_${userId}`, JSON.stringify(sessions));
        }
    }, [sessions, userId]);

    const isTokenExpired = (token) => {
        if (!token) return true;
        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            return payload.exp < Math.floor(Date.now() / 1000);
        } catch {
            return true;
        }
    };

    const handleTokenExpiration = () => {
        toast.error('Session expired. Please login again.');
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    const sendPrompt = async () => {
        if (!input.trim()) return;
        setLoading(true);

        setSessions(prevSessions => {
            let updatedSessions = [...prevSessions];

            if (updatedSessions.length === 0 || updatedSessions[currentSessionIndex]?.messages.length >= 10) {
                updatedSessions.push({ id: Date.now(), messages: [] });
                setCurrentSessionIndex(updatedSessions.length - 1);
            }

            updatedSessions[currentSessionIndex].messages.push({ role: "user", content: input });
            return updatedSessions;
        });

        try {
            const response = await axios.post(
                `https://api.maizbaan.ai/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId}`,
                { user_prompt: input },
                { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token.trim()}` } }
            );

            const responseText = response.data.content;

            setSessions(prevSessions => {
                let updatedSessions = [...prevSessions];
                updatedSessions[currentSessionIndex].messages.push({ role: "bot", content: responseText });
                return updatedSessions;
            });

        } catch {
            toast.error('Failed to generate response. Please try again.');
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    // Scroll to the bottom of the current chat session when a new message is added
    useEffect(() => {
        if (responseContainerRef.current) {
            responseContainerRef.current.scrollTop = responseContainerRef.current.scrollHeight;
        }
    }, [chatHistory]);

    return (
        <div className="flex-1 pb-[15vh] relative m-3">
            <ToastContainer />
            <div className="max-w-[900px] mx-auto relative z-[1]">
                {loading ? (
                    <div className="py-10 flex flex-col items-center gap-4">
                        <div className="w-full flex flex-col gap-2">
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                            <hr className="rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg" />
                        </div>
                        <p className="text-lg font-medium text-gray-500">Generating response...</p>
                    </div>
                ) : (
                    <div className="overflow-y-auto max-h-[400px]">
                        {/* Loop through previous sessions and make them scrollable */}
                        {sessions.map((session, sessionIndex) => (
                            <div key={sessionIndex} className="chat-session">
                                <div className="overflow-y-auto max-h-[300px] mb-4">
                                    {session.messages.map((chat, index) => (
                                        <div key={index} className={`p-3 rounded-lg shadow-md mb-4 ${chat.role === "user" ? "bg-white text-gray-800 flex" : "bg-white text-gray-800 flex gap-5"}`}>
                                            <strong>{chat.role === "user" ? <FaRegUserCircle className='text-2xl mr-4' /> : "🤖"}</strong>
                                            {chat.content}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {/* Scroll for the most recent session */}
                        <div className="overflow-y-auto max-h-[300px]" ref={responseContainerRef}>
                            {chatHistory.map((chat, index) => (
                                <div key={index} className={`p-3 rounded-lg shadow-md mb-4 ${chat.role === "user" ? "bg-white text-gray-800 flex" : "bg-white text-gray-800 flex gap-5"}`}>
                                    <strong>{chat.role === "user" ? <FaRegUserCircle className='text-2xl mr-4' /> : "🤖"}</strong>
                                    {chat.content}
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="absolute sm:bottom-5 md:bottom-0 w-full">
                <div className="flex items-center justify-between gap-5 border border-gray-400 backdrop-blur-lg bg-black/50 shadow-lg py-2 px-5 rounded-md">
                    <textarea
                        className="flex-1 bg-transparent border border-gray-300 outline-none p-2 text-lg"
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask MaizBaan"
                        onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendPrompt(); } }}
                    />
                    {input && (
                        <button className="p-2">
                            <VscSend className="text-xl cursor-pointer" onClick={sendPrompt} />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;
