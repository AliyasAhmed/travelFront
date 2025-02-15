import React, { useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AuthSection from "./AuthSection";

const SideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const { setInput, setResponseContent, setActiveConversation } = React.useContext(AppContext);

  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedChats);
  }, []);

  const loadChat = (index) => {
    setActiveConversation(chatHistory[index]);
  };

  const clearChatHistory = () => {
    localStorage.removeItem("chatHistory");
    setChatHistory([]);
    setInput("");
    setResponseContent("");
    setActiveConversation(null);
  };
  

  return (
    <>
      <div className="lg:hidden fixed top-6 left-4 z-50">
        {isMobileMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <path strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <path strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </div>

      <div
        className={`border border-[#505050] fixed inset-y-0 left-0 w-64 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="max-h-screen flex flex-col justify-between py-5 px-4">
          <div>
            <p className="mt-7 mb-5 text-center text-xl">Chat History</p>
            <div className="max-h-[60vh] overflow-y-auto">
              {chatHistory.length > 0 ? (
                chatHistory.map((chat, index) => (
                  <div
                    key={index}
                    onClick={() => loadChat(index)}
                    className="cursor-pointer bg-[#3f3f3f5d]  p-3 rounded-lg mb-2 hover:bg-gray-500"
                  >
                    <p className="font-bold">{chat.user_prompt?.slice(0, 18)}</p>
                    <p className="text-sm">{chat.user_prompt?.slice(0, 18)}...</p>
                  </div>
                ))
              ) : (
                <p className="text-center ">No chat history</p>
              )}
            </div>
          </div>

          <div className="p-4">
            <button
              onClick={clearChatHistory}
              className="w-full px-4 py-2 text-sm bg-red-600 rounded hover:bg-red-500"
            >
              Clear Chat History
            </button>
            <div className="fixed bottom-[8rem] lg:bottom-[10rem]">
              <AuthSection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;




