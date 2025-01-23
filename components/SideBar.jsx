// import React, { useContext, useState } from 'react'
// import { IoMenu } from "react-icons/io5";
// import { FaPlus } from "react-icons/fa";
// import { FiMessageSquare } from "react-icons/fi";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { MdHistory, MdOutlineSettings } from "react-icons/md";
// import { AppContext } from '../context/AppContext';
// // import { Context } from '../context/Context';

// const SideBar = () => {
//     const [extended, setExtended] = useState(false)
//     // const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context)
//         const {userName,prevPrompt, setPrevPrompt,setInput} = useContext(AppContext)
    
//     const loadPrompt = async (prompt) => {

//         // setRecentPrompt(prompt)

//         // await onSent(prompt)

//     }

    
//     return (
//         <div className=' min-h-screen inline-flex flex-col justify-between  py-[25px] px-[15px]'>
//             <div className=''>
//                 <IoMenu className='text-2xl block cursor-pointer' onClick={() => setExtended(!extended)} />
//                 <div className='inline-flex mt-2 items-center gap-2 py-2 px-4 text-[14px] rounded-full bg-[#c5bfbf] cursor-pointer text-gray-500'>
//                     <FaPlus />
//                     {extended && <p>New Chat</p>}
//                 </div>
//                 {extended && (
//                     <div className='flex flex-col animate-fadeIn duration 1000'>
//                         <p className='mt-7 mb-5'>Recent</p>
//                         {/* adding condition for recentPrompt */}
//                         {prevPrompt?.map((item, index) => {
//                             return (
//                                 <div onClick={() => setInput(item)} className='inline-flex items-center gap-4 my-2 p-2 pr-10 rounded-[50px] cursor-pointer text-blue hover:bg-gray-400'>
//                                     <FiMessageSquare />
//                                     {extended && <p>{item.user_message.slice(0, 18)}...</p>}
//                                 </div>
//                             )
//                         })}

//                         <div className='inline-flex items-center gap-4 my-2 p-2 pr-10 rounded-[50px] cursor-pointer text-gray-200 hover:bg-gray-400'>
//                         <FiMessageSquare />
//                         {extended && <p>A Friendly Greeting</p>}
//                     </div>
//                     </div>
//                 )}
//             </div>
//             {/* another bottom fiv */}
//             <div className='flex flex-col'>
//                 <div className='inline-flex items-center gap-4 my-1 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <FaRegQuestionCircle />
//                     {extended && <p>Help</p>}

//                 </div>
//                 <div className='inline-flex items-center gap-4  p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <MdHistory />
//                     {extended && <p>Activity</p>}

//                 </div><div className='inline-flex items-center gap-4  p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400'>
//                     <MdOutlineSettings />
//                     {extended && <p>Settings</p>}

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default SideBar




import React, { useContext, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaPlus, FaRegQuestionCircle } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { MdHistory, MdOutlineSettings } from "react-icons/md";
import { AppContext } from "../context/AppContext";

const SideBar = () => {
    const [extended, setExtended] = useState(false);
    const { userName, prevPrompt, setPrevPrompt, setInput } = useContext(AppContext);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    // Calculate total pages
    const totalPages = Math.ceil(prevPrompt?.length / itemsPerPage);

    // Get items for the current page
    const currentItems = prevPrompt?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="min-h-screen inline-flex flex-col justify-between py-[25px] px-[15px]">
            <div>
                <IoMenu
                    className="text-2xl block cursor-pointer"
                    onClick={() => setExtended(!extended)}
                />
                <div className="inline-flex mt-2 items-center gap-2 py-2 px-4 text-[14px] rounded-full bg-[#c5bfbf] cursor-pointer text-gray-500">
                    <FaPlus />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && (
                    <div className="flex flex-col animate-fadeIn duration-1000">
                        <p className="mt-7 mb-5">Recent</p>
                        <ul>
                            {currentItems?.map((item, index) => (
                                <li
                                    key={index}
                                    onClick={() => setInput(item)}
                                    className="inline-flex items-center gap-4 my-2 p-2 pr-10 rounded-[50px] cursor-pointer text-blue hover:bg-gray-400"
                                >
                                    <FiMessageSquare />
                                    {extended && <p>{item.user_message.slice(0, 18)}...</p>}
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages}
                                className="px-4 py-2 text-sm text-white bg-gray-600 rounded hover:bg-gray-500 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col">
                <div className="inline-flex items-center gap-4 my-1 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
                    <FaRegQuestionCircle />
                    {extended && <p>Help</p>}
                </div>
                <div className="inline-flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
                    <MdHistory />
                    {extended && <p>Activity</p>}
                </div>
                <div className="inline-flex items-center gap-4 p-2 pr-10 rounded-[50px] cursor-pointer text-white hover:bg-gray-400">
                    <MdOutlineSettings />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
