import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Heroali = () => {
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
      <div className="h-[120vh] flex justify-center text-center lg:rounded-b-[10rem] z-[10] w-auto">
        {/* Clock Tower Image */}
        <div className="absolute top-[30rem] lg:top-[40rem] clocktower right-10 w-auto h-[30vh] flex justify-center items-center overflow-hidden">
          <img
            src="src/assets/London.webp"
            alt="London"
            className="h-full w-auto object-contain"
          />
        </div>

        <div className=" flex flex-col justify-top text-top">
          <h1 className="lg:text-[15rem] md:text-[6rem] text-[3rem] font-extrabold pb-5 text-gradient">
            MAIZBAAN AI
          </h1>
          <div>
            <h2 className="relative lg:bottom-[7rem] lg:left-[26.2rem] bottom-[2.2rem] right-10 lg:text-[3rem] font-bold pb-2 text-gradient">
              Powered by WebInvolve
            </h2>
          </div>
          <p className="font-bold text-xl pb-2 text-gradient">
            Discover, plan, and book personalized experiences all in one place.
          </p>

          {/* Chat Input Box */}
          <div className="relative flex items-center border border-[#000000] rounded-[2rem] w-[80vw] top-[33rem] lg:left-[35rem] lg:top-[22rem] lg:w-[30vw] h-[10vh] px-4 mx-auto shadow-md bg-[#8f8f8fa1] ">
            {/* Add icon + extra icons */}
            <div className="flex items-center gap-2 text-gray-500">
              <img
                className="w-5 cursor-pointer"
                src="src/assets/add.png"
                alt="Add"
              />
              <span className="text-xl pr-3">😊</span>
            </div>

            {/* Input field */}
            <input
              type="text"
              placeholder="Ask us anything..."
              className="bg-transparent flex-1 outline-none px-2 text-[#000000]"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress} // Detect "Enter" key
            />

            {/* Send & Mic icons */}
            <div className="flex items-center relative gap-2 right-2">
              <span className="text-xl text-gray-500 md:w-[2vw] lg:w-[1vw] w-[5vw]">
                <img src="src/assets/voice.png" alt="Voice" />
              </span>
              <img
                className="w-6 h-6 p-1 cursor-pointer"
                src="/src/assets/send.png"
                alt="Send"
                onClick={handleSendClick} // Click event
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroali;