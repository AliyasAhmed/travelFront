import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import gsap from 'gsap';

const PackageActivitiesContent = () => {
    useEffect(() => {
      gsap.to('.activitiesSection',{
        y:0,
        opacity:1,
        duration:1.5,
        delay:.1,

      })
    }, [])
    
    return (
        <section className=" flex flex-col gap-3 justify-center items-center h-full activitiesSection -translate-y-[1000px]">
            {/* heading div */}

            <div className=" flex flex-col md:flex-row lg:flex-row gap-4 justify-around items-center w-full">
                <div className="flex flex-col gap-1">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] p-2">
                        Select your Activities
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Tell us about your trip. You can add more details later.
                    </p>
                </div>
                {/* Button div */}
                <div>
                    <div className="flex gap-4">
                        <Link to="/packageAccomodation">
                            <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
                                Previous
                            </button>
                        </Link>
                        {/* another link */}
                        <Link to='/packagePdfGen'>
                            <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90">
                                Next
                            </button>
                        </Link>

                    </div>
                </div>
            </div>


            {/* select activities div */}
            <div className="p-4 bg-black  m-5 rounded-lg md:min-w-[800px] lg:min-w-[900px]">
                <div className="flex flex-col gap-3   ">
                    <h1 className='font-bold text-lg'>Selected Activities</h1>
                    <div className="grid grid-cols-4 md:grid-cols-5 gap-3 my-2">
                        <div className="p-1 text-center border border-gray-100 rounded-lg flex items-center justify-around gap-2">
                            <h1>Hiking</h1>
                            <RxCross2 />
                        </div>
                        {/* another divs */}
                        <div className="p-2 text-center border border-gray-100 rounded-lg flex items-center justify-around gap-2">
                            <h1>Hiking</h1>
                            <RxCross2 />
                        </div>
                        <div className="p-1 text-center border border-gray-100 rounded-lg flex items-center  justify-around gap-2">
                            <h1>Hiking</h1>
                            <RxCross2 />
                        </div>
                        <div className="p-1 text-center border border-gray-100 rounded-lg flex items-center justify-around gap-2">
                            <h1>Hiking</h1>
                            <RxCross2 />
                        </div>
                        <div className="p-1 text-center border border-gray-100 rounded-lg flex items-center justify-around gap-2">
                            <h1>Hiking</h1>
                            <RxCross2 />
                        </div>
                    </div>
                    {/* input field */}
                    <input type="text" name="" id="" placeholder='Type or search for activities' className='placeholder:font-bold p-3 rounded-lg' />

                </div>
            </div>

        </section>
    )
}

export default PackageActivitiesContent