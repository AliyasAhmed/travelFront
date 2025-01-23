import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative text-white ">
            {/* Hero Text Section */}
            <div className="text-center max-w-4xl px-6 mx-auto mt-36 mb-24 ">
                <h1 className="text-3xl md:text-5xl leading-tight font-inter font-semibold">
                    Travel Buddy for
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]"> AI</span> Era
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200">
                    Visualize, communicate, and iterate on wireframes and prototypes in minutes. Empower your
                    product team with AI!
                </p>
                <div className="mt-4 flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Plan a trip to Kashmir"
                        aria-label="Trip planning input"
                        className="placeholder:font-bold placeholder:text-lg placeholder:text-gray-100 h-[55px] w-[350px] px-4 text-gray-700 placeholder-gray-400 bg-white rounded-l-lg focus:outline-none shadow-md"
                    />
                    <Link to='/userConvo'>
                        <button
                            aria-label="Generate trip plan"
                            className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-r-lg shadow-md hover:shadow-lg flex items-center"
                        >
                            ✨ Generate
                        </button>
                    </Link>

                </div>
            </div>

            {/* Image Section */}
            <div className="my-12 py-12 flex justify-center ">
                <img
                    src="../src/assets/heroPic.png"
                    alt="Hero"
                    className="w-full max-w-[972px] h-auto object-cover rounded-lg shadow-lg"
                />
            </div>

        </section>
    );
};

export default Hero;
