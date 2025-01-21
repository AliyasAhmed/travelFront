import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [signedIn, setSignedIn] = useState(false);
    const [user, setUser] = useState(null);

    // Check localStorage for token and initialize state
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            setSignedIn(true);
            // Optional: Fetch user details from token if needed
            // Example: setUser(decodedUserFromToken);
        } else {
            setSignedIn(false);
        }
    }, []); // Runs only once when the component is mounted

    return (
        <AppContext.Provider value={{ signedIn, setSignedIn, user, setUser }}>
            {children}
        </AppContext.Provider>
    );
};
