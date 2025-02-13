import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [message, setMessage] = useState(""); // State to store input text
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && message.trim() !== "") {
      navigate(`/userConvo?conversation=${encodeURIComponent(message)}`);
    }
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      navigate(`/userConvo?conversation=${encodeURIComponent(message)}`);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center text-center bg-white text-black relative px-4">
        {/* Clock Tower Image */}
        <div className="absolute bottom-10 right-5 lg:right-20 w-[150px] md:w-[200px] lg:w-[250px]">
          <img
            src="src/assets/London.webp"
            alt="London"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-[3rem] md:text-[6rem] lg:text-[10rem] font-extrabold leading-none text-gradient">
          MAIZBAAN AI
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mt-2 text-gradient">
          Powered by WebInvolve
        </h2>
        <p className="text-base md:text-lg lg:text-xl font-semibold mt-4 text-gradient max-w-[80%] mx-auto">
          Discover, plan, and book personalized experiences all in one place.
        </p>

        {/* Chat Input Box */}
        <div className="relative flex items-center border border-gray-800 rounded-full w-full max-w-[400px] lg:max-w-[500px] h-12 px-4 mt-8 shadow-md bg-gray-200">
          {/* Add icon + extra icons */}
          <div className="flex items-center gap-2 text-gray-500">
            <img
              className="w-5 cursor-pointer"
              src="src/assets/add.png"
              alt="Add"
            />
            <span className="text-xl pr-2">😊</span>
          </div>

          {/* Input field */}
          <input
            type="text"
            placeholder="Ask us anything..."
            className="bg-transparent flex-1 outline-none px-2 text-black text-sm md:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress} // Detect "Enter" key
          />

          {/* Send & Mic icons */}
          <div className="flex items-center gap-2">
            <img src="src/assets/voice.png" alt="Voice" className="w-5 h-5" />
            <img
              className="w-6 h-6 p-1 cursor-pointer"
              src="src/assets/send.png"
              alt="Send"
              onClick={handleSendClick} // Click event
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
