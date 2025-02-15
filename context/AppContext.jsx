
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [input, setInput] = useState('');
    const [responseContent, setResponseContent] = useState('');
    const [showProfile, setShowProfile] = useState(false);
    const [userNumber, setUserNumber] = useState(localStorage.getItem('UserNumber') || null);
    const [userId, setUserId] = useState(localStorage.getItem('UserId') || null);
    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(localStorage.getItem('userName') || null);
    const [currentSessionIndex, setCurrentSessionIndex] = useState(0);  // Track active session
    const [prevPrompt, setPrevPrompt] = useState([]); // Add this state
    const [activeConversation, setActiveConversation] = useState(null); // Track active conversation

    // Sessions: Each session contains 10 messages
    const [sessions, setSessions] = useState(() => {
        return JSON.parse(localStorage.getItem('chatSessions')) || [];
    });

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setSignedIn(true);
            try {
                const payload = JSON.parse(atob(token.split('.')[1]));
                setUser(payload.user || null);
                setUserName(payload.userName || localStorage.getItem('userName'));
                localStorage.setItem('userName', payload.userName || '');
            } catch (error) {
                console.error("Error decoding token:", error);
                setSignedIn(false);
            }
        } else {
            setSignedIn(false);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('chatSessions', JSON.stringify(sessions));
    }, [sessions]);

    return (
        <AppContext.Provider value={{
            signedIn,
            setSignedIn,
            user,
            setUser,
            userName,
            setUserName,
            sessions,
            setSessions,
            input,
            setInput,
            responseContent,
            setResponseContent,
            showProfile,
            setShowProfile,
            userNumber,
            setUserNumber,
            userId,
            setUserId,
            currentSessionIndex,
            setCurrentSessionIndex,
            setPrevPrompt, // ✅ Add 
            activeConversation,
            setActiveConversation // Add this
        }}>
            {children}
        </AppContext.Provider>
    );
};


