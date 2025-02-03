import React, { useState, useEffect, useContext } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { VscSend } from 'react-icons/vsc';
import axios from 'axios';
import { toast, ToastContainer } from "react-toastify";
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

// ✅ Import PDF dependencies
import { PDFDownloadLink, Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { padding: 20, fontSize: 12, color: 'black' },
    text: { marginBottom: 10 },
});

const Main = () => {
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState('');
    const [userId, setUserId] = useState('');
    const [agencyId, setAgencyId] = useState('');
    const [userInputHistory, setUserInputHistory] = useState('');
    const [responseContent, setResponseContent] = useState('');
    const navigate = useNavigate();
    const { userName, setInput, input } = useContext(AppContext);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) return;
        setToken(token);

        try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            const now = Math.floor(Date.now() / 1000);
            if (payload.exp < now) {
                toast.error('Session expired. Please login again.');
                localStorage.clear();
                return;
            }
            setUserId(payload.id || '');
            setAgencyId(payload.agencyId || '');
        } catch (error) {
            console.error('Error decoding token:', error.message);
        }
    }, []);

    const sendPrompt = async () => {
        if (!input.trim()) {
            toast.error("Please enter a prompt before sending.");
            return;
        }

        const token = localStorage.getItem('authToken');
        if (!token) {
            toast.error("No auth token found. Please login again.");
            navigate('/login');
            return;
        }

        setLoading(true);
        setUserInputHistory(input);
        setResponseContent('');

        try {
            const response = await axios.post(
                https://api.maizbaan.ai/api/v1/conversations/chats?agency_id=${agencyId}&user_id=${userId},
                { user_prompt: input },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': Bearer ${token.trim()},
                    },
                }
            );

            if (response.data && response.data.content) {
                setResponseContent(response.data.content);
            } else {
                toast.error("No valid response received.");
            }
        } catch (error) {
            console.error('Error sending prompt:', error);
            toast.error("Failed to generate response. Try again.");
        } finally {
            setLoading(false);
            setInput('');
        }
    };

    // ✅ PDF Component inside JSX
    const ResponsePDF = () => (
        <Document>
            <Page size="A4" style={styles.page}>
                <Text style={styles.text}>{responseContent}</Text>
            </Page>
        </Document>
    );

    return (
        <div className="flex-1 pb-[15vh] relative m-3">
            <ToastContainer />

            {/* Header */}
            <div className="flex text-xl p-5 text-slate-700 justify-between">
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">
                    MaizBaan Ai
                </p>
            </div>

            {/* User Input History */}
            {userInputHistory && (
                <div className="bg-white text-gray-800 p-3 rounded-lg shadow-md mb-4 flex items-center gap-2">
                    <FaRegUserCircle className='text-2xl mr-4' /> {userInputHistory}
                </div>
            )}

            {/* Main Content */}
            <div className="max-w-[900px] mx-auto relative z-[1]">
                {loading ? (
                    <div className="py-10 px-[5%] flex flex-col items-center gap-4">
                        <p className="text-lg font-medium text-gray-500">Generating response...</p>
                    </div>
                ) : responseContent ? (
                    <>
                        {/* Visible Response Box (with Scroll) */}
                        <div
                            id="responseContent"
                            className="relative p-5 bg-white rounded-lg shadow-md"
                            style={{
                                maxHeight: "600px", // Set fixed height for the response container
                                overflowY: "auto", // Enable vertical scroll if content exceeds height
                                padding: "15px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                color: "black"
                            }}
                        >
                            <div>{responseContent}</div>
                        </div>

                        {/* ✅ Download PDF Button (Fully Functional) */}
                        <PDFDownloadLink
                            document={<ResponsePDF />}
                            fileName="response.pdf"
                        >
                            {({ loading }) => (
                                <button className="bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-gray-800 font-bold p-2 rounded mt-5">
                                    {loading ? "Generating PDF..." : "Download as PDF"}
                                </button>
                            )}
                        </PDFDownloadLink>
                    </>
                ) : (
                    <div className="text-3xl font-semibold text-slate-500 px-5">
                        <p className="bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] bg-clip-text text-transparent">
                            Hello, {userName}.
                        </p>
                        <p className="text-slate-400">How can I help you today?</p>
                    </div>
                )}
            </div>

            {/* Input Area */}
            <div className="absolute bottom-5 w-full">
                <div className="flex items-center border p-3 rounded-md">
                    <textarea
                        className="flex-1 bg-transparent p-2 text-lg"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                sendPrompt();
                            }
                        }}
                        placeholder="Ask MaizBaan"
                    />
                    {input && (
                        <button onClick={sendPrompt} className="p-3 bg-blue-500 text-white rounded">
                            <VscSend className="text-xl cursor-pointer" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Main;