import React, { useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import AuthSection from "./AuthSection";

const SideBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const { setInput, setResponseContent } = React.useContext(AppContext);

  useEffect(() => {
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedChats);
  }, []);

  const loadChat = () => {
    setInput("");
    setResponseContent(chatHistory.map(chat => chat.ai_response).join("\n\n"));
  };

  const clearChatHistory = () => {
    localStorage.removeItem("chatHistory");
    setChatHistory([]);
    setInput("");
    setResponseContent("");
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
        className={`border border-gray-400 fixed inset-y-0 left-0 w-64 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 lg:static lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="max-h-screen flex flex-col justify-between py-5 px-4">
          <div>
            <p className="mt-7 mb-5 text-center text-xl">Chat History</p>
            <div className="max-h-[70vh] overflow-y-auto">
              {chatHistory.length > 0 ? (
                <div
                  onClick={loadChat}
                  className="cursor-pointer bg-gray-600 text-white p-3 rounded-lg mb-2 hover:bg-gray-500"
                >
                  <p className="font-bold">{chatHistory[0]?.user_prompt?.slice(0, 18)}</p>
                  <p className="text-sm">{chatHistory[0]?.user_prompt?.slice(0, 18)}...</p>
                </div>
              ) : (
                <p className="text-center text-gray-500">No chat history</p>
              )}
            </div>
          </div>

          <div className="p-4">
            <button
              onClick={clearChatHistory}
              className="w-full px-4 py-2 text-sm text-white bg-red-600 rounded hover:bg-red-500"
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
