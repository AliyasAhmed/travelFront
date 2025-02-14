import React, { useState, useEffect, useContext, useRef } from "react";
import { VscSend } from "react-icons/vsc";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState("");
  const [agencyId, setAgencyId] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate();
  const chatContainerRef = useRef(null);

  const {
    userName,
    input,
    setInput,
    responseContent,
    setResponseContent,
    setUser,
    setSignedIn,
  } = useContext(AppContext);

  const formatResponse = (text) => {
    return text
      .replace(/# (.*?)\n/g, '<h1 class="text-xl font-bold ">$1</h1>')
      .replace(/## (.*?)\n/g, '<h2 class="text-lg font-semibold ">$1</h2>')
      .replace(/### (.*?)\n/g, '<h3 class="text-md font-medium ">$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br/>")
      .replace(/- (.*?)\n/g, '<li class="list-disc ml-4">$1</li>')
      .replace(/---/g, '<hr class="border-gray-400 my-2"/>');
  };

  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp < now;
    } catch (error) {
      console.error("Error checking token expiration:", error);
      return true;
    }
  };

  const handleTokenExpiration = () => {
    toast.error("Session expired. Please login again.");
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    setSignedIn(false);
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token || isTokenExpired(token)) {
      handleTokenExpiration();
      return;
    }
    setToken(token);
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id || "");
      setAgencyId(payload.agencyId || "");
    } catch (error) {
      console.error("Error decoding token:", error.message);
      handleTokenExpiration();
    }
  }, []);

  useEffect(() => {
    const fetchChatHistory = async () => {
      if (!userId || !agencyId) return;
      const currentToken = localStorage.getItem("authToken");
      if (!currentToken || isTokenExpired(currentToken)) {
        handleTokenExpiration();
        return;
      }
      try {
        const response = await axios.get(
          `https://api.maizbaan.ai/api/v1/conversations/conversations/user/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${currentToken.trim()}`,
            },
          }
        );
        setChatHistory(response.data);
      } catch (error) {
        console.error("Error fetching chat history:", error.message);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          handleTokenExpiration();
        }
      }
    };
    fetchChatHistory();
  }, [userId, agencyId]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, responseContent]);

  const sendPrompt = async () => {
    const token = localStorage.getItem("authToken");
    if (!token || isTokenExpired(token)) {
      handleTokenExpiration();
      return;
    }
    if (!input.trim()) return;
    setResponseContent("");
    setLoading(true);
    try {
      const response = await axios.post(
        `https://api.maizbaan.ai/api/v1/conversations/chats?agency_id=1&user_id=${userId}`,
        { user_prompt: input },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.trim()}`,
          },
        }
      );
      const responseText = formatResponse(response.data.content);
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { user_prompt: input, ai_response: responseText },
      ]);
      setResponseContent(responseText);
    } catch (error) {
      console.error(
        "Error response:",
        error.response ? error.response.data : error.message
      );
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        handleTokenExpiration();
      } else {
        toast.error("Failed to Generate response. Please try again.");
      }
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full p-5">
        <ToastContainer />
        <div className="text-xl font-bold text-center mb-5">MaizBaan Ai</div>
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto space-y-4 p-3">
          {chatHistory.map((chat, index) => (
            <div key={index} className="space-y-2">
              {chat.user_prompt && (
                <div className="text-right">
                  <div className="inline-block border border-[#8080806b] bg-blue-500  p-3 rounded-lg">{chat.user_prompt}</div>
                </div>
              )}
              {chat.ai_response && (
                <div className="text-left">
                  <div className="inline-block border border-[#8080806b]  p-3 rounded-lg" dangerouslySetInnerHTML={{ __html: chat.ai_response }} />
                </div>
              )}
            </div>
          ))}

          {/* Show loading indicator only when waiting for a response */}
          {loading && (
            <div className="text-left animate-pulse">
              <div className="inline-block border border-[#8080806b] p-3 rounded-lg bg-gray-200">
                Generating response...
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-3  p-3 rounded-lg shadow-md">
          <textarea className="flex-1 p-2 border bg-transparent rounded-md" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask MaizBaan" onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), sendPrompt())} />
          <VscSend className="text-2xl cursor-pointer text-blue-500" onClick={sendPrompt} />
        </div>
      </div>
    </>
  );
};

export default Main;

