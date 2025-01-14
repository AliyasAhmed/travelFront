import React, { useContext, useEffect, useState } from 'react'
import { FaCompass, FaNodeJs, FaRegUserCircle } from 'react-icons/fa'
import { TiWeatherSunny } from "react-icons/ti";
import { GoGoal } from "react-icons/go";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { GrMicrophone } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
// import { Context } from '../src/App';
// import { Context } from '../context/Context';
// import geminiLogo from '../assets/geminiLogo.png'

const Main = () => {
    const [input, setInput] = useState('');

    const sendPrompt=async (input)=>{
            
    }

    return (
        <div className=' flex-1 min-h-screen pb-[15vh] relative '>
            <div className='flex text-xl p-5 text-slate-700 justify-between'>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-semibold">Travel Ai</p>
                <FaRegUserCircle className='text-2xl text-gray-200 mr-2' />
            </div>

            <div className="max-w-[900px] mx-auto ">
                 <>
                    <div className="my-12 text-[56px] font-semibold text-slate-500 p-5">
                        <p>
                            <span className='bg-gradient-to-r from-[#2d8890] via-[#ab838a] to-[#c65366] bg-clip-text text-transparent'>Hello, Faizan.</span>
                        </p>
                        <p className='text-slate-400'>
                            How can I help you Today?
                        </p>
                    </div>

                    {/* grid div */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
                        <div className='h-[200px] p-4 bg-transparent bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                            <p className='text-slate-700 text-lg'>Suggest top 10 webseries</p>

                            <FaCompass className='text-2xl absolute bottom-2 right-3' />
                        </div>

                        <div className='h-[200px] p-4 bg-transparent bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                            <p className='text-slate-700 text-lg'>What is loop in JS</p>

                            <FaNodeJs className='text-2xl absolute bottom-2 right-3' />
                        </div>

                        <div className='h-[200px] p-4 bg-transparent bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                            <p className='text-slate-700 text-lg'>What's the weather like today?</p>

                            <TiWeatherSunny className='text-2xl absolute bottom-2 right-3' />
                        </div>

                        <div className='h-[200px] p-4 bg-transparent bg-gradient-to-b from-green-400 rounded-lg relative cursor-pointer hover:bg-gray-300'>
                            <p className='text-slate-700 text-lg'>What are the main goals of the United Nations?</p>

                            <GoGoal className='text-2xl absolute bottom-2 right-3' />
                        </div>
                    </div>
                </> 


                    <div className='py-0 px-[5%] max-h-[70vh] overflow-y-scroll scrollbar-hide '>
                        <div className='my-10 mx-0 flex items-center gap-5'>
                            <FaRegUserCircle className='text-3xl' />
                            <p className='text-lg font-[400] leading[1.8]'>Recent Prompt</p>
                        </div>

                        <div className="flex items-start gap-5">
                            <img src="" alt="" className="w-8 rounded-[50%]" />

                            {/* loading effect */}
                            {/* {loading ?
                                <div className='w-full flex flex-col gap-2'>
                                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
                                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
                                    <hr className='rounded-md border-none bg-gray-200 bg-gradient-to-r from-[#81cafe] via-[#ffff] to-[#81cafe] p-4 animate-scroll-bg' />
                                </div>
                                :
                                <p dangerouslySetInnerHTML={{ __html: resultData }} className='text-lg font-[400] leading[1.8]'></p>
                            } */}

                        </div>
                    </div>
                


                <div className="absolute bottom-0 w-full max-w-[900px] px-5 mx-auto">
                    <div className="flex items-center justify-between gap-20 bg-gray-200 py-2 px-5 rounded-full">
                        <input className='flex-1 bg-transparent border-none outline-none p-2 text-lg placeholder:text-black' type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Ask TravelAi' />

                        <div className="flex gap-4 items-center">
                            <MdOutlineAddPhotoAlternate className='text-xl cursor-pointer' />
                            <GrMicrophone className='text-xl cursor-pointer' />
                            {input && (
                                <VscSend className='text-xl cursor-pointer animate-fadeIn duration 1000' />
                            )}
                        </div>

                    </div>
                    <p className='text-center text-sm text-gray-600'>TravelAi can make mistakes, so double-check it</p>

                </div>
            </div>
        </div>
    )
}

export default Main