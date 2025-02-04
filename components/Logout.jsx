import React from "react";

const Logout = () => {
    const handleLogout = () => {
        // Remove the token from localStorage
        localStorage.clear();
        localStorage.removeItem('authToken');
        localStorage.removeItem('prevPrompt');
        localStorage.removeItem('userName');
        localStorage.removeItem('chatHistory');

        console.log("Token removed from localStorage");
        // Redirect user or perform other actions after logout
        window.location.href = "/login"; // Example: Redirect to login page
    };

    return (
        <button onClick={handleLogout} className="bg-[#2a3033] text-white px-4 py-2 rounded">
            Logout
        </button>
    );
};

export default Logout;
