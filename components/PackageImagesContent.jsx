

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PackageImagesContent = () => {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedImages((prev) => [...prev, ...files]);
    };

    useEffect(() => {
        
            gsap.to('.imagesSection', {
                opacity: 1,
                delay: .5,
                duration:1,
            })

            // another gsap
            gsap.to('.secondSection',{
                opacity:1,
                duration:1,
                delay:1,
                y:0,
                ease: "power1.out",
            })
        
    },[])

    return (
        <section className="imagesSection opacity-0 ">
            <div className="flex flex-col gap-3  m-3">
                {/* Text div */}
                <div className=" flex flex-col md:flex-row lg:flex-row gap-4 justify-around items-center">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] p-2">
                            Add Images
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Add at least one image to help travellers get a sense of your trip
                        </p>
                    </div>
                    {/* Button div */}
                    <div>
                        <div className="flex gap-4">
                            <Link to="/packageWeather">
                                <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
                                    Previous
                                </button>
                            </Link>
                            {/* to go to next link */}
                            <Link to='/packageAccomodation'>
                                <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90">
                                    Next
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>
                {/* Images adding section */}
                <div className="p-3 bg-black border rounded-lg ">
                    <div className="flex flex-col items-center gap-4">
                        {/* Placeholder or Uploaded Images */}
                        <div className="w-full p-20 flex flex-col gap-5 items-center justify-around  bg-black border-2 border-dotted border-gray-400 rounded-md">
                            {selectedImages.length === 0 ? (
                                <p className="text-gray-400">No images selected yet</p>
                            ) : (
                                <div className="grid grid-cols-3 gap-2 border-red-800 border p-10">
                                    {selectedImages.map((file, index) => (
                                        <img
                                            key={index}
                                            src={URL.createObjectURL(file)}
                                            alt={`Uploaded ${index}`}
                                            className="h-16 w-16 object-cover rounded-md"
                                        />
                                    ))}
                                </div>
                            )}
                            {/* Upload Button */}
                            <button
                                onClick={() => document.getElementById("fileInput").click()}
                                className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg px-4 py-2"
                            >
                                Upload Images
                            </button>
                        </div>

                        {/* Hidden File Input */}
                        <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>
                </div>

                {/* create with ai images section */}
                <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-2 bg-black p-5 rounded-xl my-3 overflow-hidden opacity-0 -translate-y-[100px] secondSection">
                    {/* text div */}
                    <div className="flex flex-col gap-3">
                        <h1 className='text-xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]'>Generate Photos With AI</h1>
                        <p className='text-gray-100'>Generate Photos using our AI chatbot and add it to your package Automatically</p>
                    </div>
                    {/* button div */}
                    <div className="">
                        <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90">
                            Let's Go
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PackageImagesContent;
