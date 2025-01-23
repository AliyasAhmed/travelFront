// import React, { createContext, useState, useEffect } from "react";

// export const AppContext = createContext();

// export const AppProvider = ({ children }) => {
//     const [signedIn, setSignedIn] = useState(false);
//     const [user, setUser] = useState(null);
//     const [userName, setUserName] = useState(null);
//     const [prevPrompt, setPrevPrompt] = useState([])

//     // Check localStorage for token and initialize state
//     useEffect(() => {
//         const token = localStorage.getItem('authToken');
//         if (token) {
//             setSignedIn(true);
//             // Optional: Fetch user details from token if needed
//             // Example: setUser(decodedUserFromToken);
//         } else {
//             setSignedIn(false);
//         }
//     }, []); // Runs only once when the component is mounted

//     return (
//         <AppContext.Provider value={{ signedIn, setSignedIn, user, setUser, userName, setUserName, prevPrompt, setPrevPrompt}}>
//             {children}
//         </AppContext.Provider>
//     );
// };


//trying this code , if works
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [input, setInput] = useState('');
    const [responseContent, setResponseContent] = useState('');

    const [user, setUser] = useState(null);
    const [userName, setUserName] = useState(localStorage.getItem('userName') || null);
    const [prevPrompt, setPrevPrompt] = useState(
        JSON.parse(localStorage.getItem('prevPrompt')) || []
    );

    // Check localStorage for token and initialize state
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setSignedIn(true);
            try {
                const payload = JSON.parse(atob(token.split('.')[1])); // Decode JWT payload
                setUser(payload.user || null);
                setUserName(payload.userName || localStorage.getItem('userName'));
                // Save to localStorage for persistence
                localStorage.setItem('userName', payload.userName || '');
            } catch (error) {
                console.error("Error decoding token:", error);
                setSignedIn(false);
            }
        } else {
            setSignedIn(false);
        }
    }, []); // Runs only once when the component is mounted

    // Persist userName to localStorage whenever it changes
    useEffect(() => {
        if (userName !== null) {
            localStorage.setItem('userName', userName);
        }
    }, [userName]);

    // Persist prevPrompt to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('prevPrompt', JSON.stringify(prevPrompt));
    }, [prevPrompt]);

    return (
        <AppContext.Provider value={{
            signedIn,
            setSignedIn,
            user,
            setUser,
            userName,
            setUserName,
            prevPrompt,
            setPrevPrompt,
            input,
            setInput,
            responseContent,
            setResponseContent
        }}>
            {children}
        </AppContext.Provider>
    );
};
