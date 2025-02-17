// import React, { useState, useEffect, useContext, useRef } from "react";
// import { VscSend } from "react-icons/vsc";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import { AppContext } from "../context/AppContext";
// import { useNavigate } from "react-router-dom";

// const Main = () => {
//   const [loading, setLoading] = useState(false);
//   const [token, setToken] = useState("");
//   const [userId, setUserId] = useState("");
//   const [agencyId, setAgencyId] = useState("");
//   const [chatHistory, setChatHistory] = useState([]);
//   const navigate = useNavigate();
//   const chatContainerRef = useRef(null);

//   const {
//     userName,
//     input,
//     setInput,
//     responseContent,
//     setResponseContent,
//     setUser,
//     setSignedIn,
//     activeConversation,
//     setActiveConversation,
//   } = useContext(AppContext);

//   const formatResponse = (text) => {
//     return text
//       .replace(/# (.*?)\n/g, '<h1 class="text-xl font-bold ">$1</h1>')
//       .replace(/## (.*?)\n/g, '<h2 class="text-lg font-semibold ">$1</h2>')
//       .replace(/### (.*?)\n/g, '<h3 class="text-md font-medium ">$1</h3>')
//       .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
//       .replace(/\*(.*?)\*/g, "<em>$1</em>")
//       .replace(/\n/g, "<br/>")
//       .replace(/- (.*?)\n/g, '<li class="list-disc ml-4">$1</li>')
//       .replace(/---/g, '<hr class="border-gray-400 my-2"/>');
//   };

//   const isTokenExpired = (token) => {
//     if (!token) return true;
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       const now = Math.floor(Date.now() / 1000);
//       return payload.exp < now;
//     } catch (error) {
//       console.error("Error checking token expiration:", error);
//       return true;
//     }
//   };

//   const handleTokenExpiration = () => {
//     toast.error("Session expired. Please login again.");
//     localStorage.removeItem("authToken");
//     localStorage.removeItem("userName");
//     setSignedIn(false);
//     setUser(null);
//     navigate("/login");
//   };

//   useEffect(() => {
//     const token = localStorage.getItem("authToken");
//     if (!token || isTokenExpired(token)) {
//       handleTokenExpiration();
//       return;
//     }
//     setToken(token);
//     try {
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       setUserId(payload.id || "");
//       setAgencyId(payload.agencyId || "");
//     } catch (error) {
//       console.error("Error decoding token:", error.message);
//       handleTokenExpiration();
//     }
//   }, []);

//   useEffect(() => {
//     const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
//     setChatHistory(savedChats);
//   }, []);

//   useEffect(() => {
//     if (chatContainerRef.current) {
//       chatContainerRef.current.scrollTop =
//         chatContainerRef.current.scrollHeight;
//     }
//   }, [chatHistory, responseContent, activeConversation]);

//   const sendPrompt = async () => {
//     const token = localStorage.getItem("authToken");
//     if (!token || isTokenExpired(token)) {
//       handleTokenExpiration();
//       return;
//     }
//     if (!input.trim()) return;
//     setResponseContent("");
//     setLoading(true);

//     try {
//       const response = await axios.post(
//         `https://api.maizbaan.ai/api/v1/conversations/chats?agency_id=1&user_id=${userId}`,
//         { user_prompt: input },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token.trim()}`,
//           },
//         }
//       );

//       const responseText = formatResponse(response.data.content);

//       // Update chat history to include the entire conversation
//       setChatHistory((prevHistory) => {
//         let updatedChatHistory = [...prevHistory];

//         if (activeConversation) {
//           // Add new messages to the active conversation
//           const updatedSession = {
//             ...activeConversation,
//             messages: [
//               ...activeConversation.messages,
//               { user_prompt: input, ai_response: responseText },
//             ],
//           };
//           updatedChatHistory = updatedChatHistory.map((chat) =>
//             chat === activeConversation ? updatedSession : chat
//           );
//           setActiveConversation(updatedSession);
//         } else {
//           // Start a new conversation if no active one exists
//           const newChat = {
//             messages: [{ user_prompt: input, ai_response: responseText }],
//           };
//           updatedChatHistory.push(newChat);
//           setActiveConversation(newChat);
//         }

//         // Save the updated chat history to local storage
//         localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
//         return updatedChatHistory;
//       });

//       setResponseContent(responseText);
//     } catch (error) {
//       console.error(
//         "Error response:",
//         error.response ? error.response.data : error.message
//       );
//       if (
//         error.response &&
//         (error.response.status === 401 || error.response.status === 403)
//       ) {
//         handleTokenExpiration();
//       } else {
//         toast.error("Failed to generate response. Please try again.");
//       }
//     } finally {
//       setLoading(false);
//       setInput("");
//     }
//   };
 
//   return (
//     <>
//       <div className="flex flex-col h-screen w-full p-5">
//         <ToastContainer />
//         <div className="text-xl font-bold text-center mb-5">MaizBaan Ai</div>

//         {/* Chat History Display */}
//         <div
//           className="flex-1 overflow-y-auto space-y-4 p-3"
//           ref={chatContainerRef}
//         >
//           {activeConversation ? (
//             activeConversation.messages.map((message, index) => (
//               <div key={index}>
//                 {/* User Message */}
//                 <div className="text-right">
//                   <div className="inline-block border border-[#4444446b] bg-blue-500 p-3 rounded-lg">
//                     {message.user_prompt}
//                   </div>
//                 </div>

//                 {/* AI Response */}
//                 <div className="text-left mt-2">
//                   <img
//                     className="relative right-[1rem] w-[2rem]"
//                     src="src\assets\maizbaanLogo.png"
//                     alt=""
//                   />
//                   <div
//                     className="inline-block border border-[#4444446b] p-3 rounded-lg"
//                     dangerouslySetInnerHTML={{
//                       __html: message.ai_response,
//                     }}
//                   />
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="text-gray-500 italic text-center">
//               Select a chat
//             </div>
//           )}

//           {loading && (
//             <div className="text-left text-gray-500 italic animate-blink">
//               Thinking...
//             </div>
//           )}
//         </div>

//         {/* Input Section */}
        
//         <div className="flex items-center gap-3 p-3 rounded-lg shadow-md">
//           <button ><img className="w-[2rem]" src="public/assets/download.svg" alt="" /></button>
//           <textarea
//             className="flex-1 p-2 border bg-transparent rounded-md"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Ask MaizBaan"
//             onKeyDown={(e) =>
//               e.key === "Enter" &&
//               !e.shiftKey &&
//               (e.preventDefault(), sendPrompt())
              
//             }
//           />

//           <VscSend
//             className="text-2xl cursor-pointer text-blue-500"
//             onClick={sendPrompt}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Main;




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
    activeConversation,
    setActiveConversation,
  } = useContext(AppContext);

  // Format response for chat display
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
    const savedChats = JSON.parse(localStorage.getItem("chatHistory")) || [];
    setChatHistory(savedChats);
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory, responseContent, activeConversation]);

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

      setChatHistory((prevHistory) => {
        let updatedChatHistory = [...prevHistory];

        if (activeConversation) {
          const updatedSession = {
            ...activeConversation,
            messages: [
              ...activeConversation.messages,
              { user_prompt: input, ai_response: responseText },
            ],
          };
          updatedChatHistory = updatedChatHistory.map((chat) =>
            chat === activeConversation ? updatedSession : chat
          );
          setActiveConversation(updatedSession);
        } else {
          const newChat = {
            messages: [{ user_prompt: input, ai_response: responseText }],
          };
          updatedChatHistory.push(newChat);
          setActiveConversation(newChat);
        }

        localStorage.setItem("chatHistory", JSON.stringify(updatedChatHistory));
        return updatedChatHistory;
      });

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
        toast.error("Failed to generate response. Please try again.");
      }
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  // Function to download PDF from backend route
  const downloadPDF = async () => {
    const token = localStorage.getItem("authToken");
    if (!token || isTokenExpired(token)) {
      handleTokenExpiration();
      return;
    }

    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/v1/genpdf/travel-packages/250/download-pdf`,
        {
          headers: {
            "Authorization": `Bearer ${token}`,
          },
          responseType: "blob", // Important for handling binary data (PDF)
        }
      );

      // Create a temporary link element to trigger the download
      const blob = new Blob([response.data], { type: "application/pdf" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "travel-package.pdf"; // Set the desired file name
      link.click(); // Trigger download
    } catch (error) {
      console.error("Error downloading PDF:", error.message);
      toast.error("Failed to download PDF.");
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen w-full p-5">
        <ToastContainer />
        <div className="text-xl font-bold text-center mb-5"><a href="/">MaizBaan Ai</a></div>

        <div
          className="flex-1 overflow-y-auto space-y-4 p-3"
          ref={chatContainerRef}
        >
          {activeConversation ? (
            activeConversation.messages.map((message, index) => (
              <div key={index}>
                <div className="text-right">
                  <div className="inline-block border border-[#4444446b] bg-blue-500 p-3 rounded-lg">
                    {message.user_prompt}
                  </div>
                </div>

                <div className="text-left mt-2">
                  <img
                    className="relative right-[1rem] w-[2rem]"
                    src="src/assets/maizbaanLogo.png"
                    alt=""
                  />
                  <div
                    className="inline-block border border-[#4444446b] p-3 rounded-lg"
                    dangerouslySetInnerHTML={{
                      __html: message.ai_response,
                    }}
                  />
                </div>
              </div>
            ))
          ) : (
            <div className="text-gray-500 italic text-center">
              Select a chat
            </div>
          )}

          {loading && (
            <div className="text-left text-gray-500 italic animate-blink">
              Thinking...
            </div>
          )}
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg shadow-md">
          <button onClick={downloadPDF}>
            <img className="w-[2rem]" src="public/assets/download.svg" alt="" />
          </button>

          <textarea
            className="flex-1 p-2 border bg-transparent rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask MaizBaan"
            onKeyDown={(e) =>
              e.key === "Enter" &&
              !e.shiftKey &&
              (e.preventDefault(), sendPrompt())
            }
          />

          <VscSend
            className="text-2xl cursor-pointer text-blue-500"
            onClick={sendPrompt}
          />
        </div>
      </div>
    </>
  );
};

export default Main;
