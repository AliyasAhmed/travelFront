import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Adventure = () => {
    return (
        <section className="relative text-white border border-black bg-gradient-to-br from-[#000] via-[#000] to-[#0000] ">
            {/* Hero Text Section */}
            <div className="text-center max-w-4xl px-6 mx-auto mt-36 mb-24 ">
                <h1 className="text-3xl md:text-5xl leading-tight font-inter font-semibold">
                    Start Your AI Adventure
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-50">
                    Interested to learn more?
                </p>
                <div className="">
                    <Link to='/userConvo'>
                        <button
                            aria-label="Generate trip plan"
                            className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-white font-bold rounded-lg shadow-md hover:shadow-lg flex items-center gap-3  mx-auto mt-2"
                        >
                            Try Now <span className="text-gray-600"><FaArrowRightLong /></span>
                        </button>
                    </Link>
                </div>


            </div>
        </section>
    );
};

export default Adventure;
