import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const DarkMode = () => {
  // Load dark mode preference from localStorage
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  // Apply dark mode styles to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white"; // Ensures text is visible in dark mode
    } else {
      document.body.style.backgroundColor = "#e4e4e4";
      document.body.style.color = "black";
      
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center ">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={40} />
    </div>
  );
};

export default DarkMode;