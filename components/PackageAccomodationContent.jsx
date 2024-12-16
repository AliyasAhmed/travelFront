import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import accomodationPicture from '../src/assets/accomodationPictute.svg'
import gsap from 'gsap'

const PackageAccomodationContent = () => {
    useEffect(()=>{
        gsap.to('.mainSection',{
            y:0,
            opacity:1,
            duration:1.5,
            
        })
    })
    
    return (
        <section className='flex flex-col gap-3 mainSection -translate-y-[1000px] opacity-0' id='mainSection'>
            {/* text container */}
            <div className=" flex flex-col md:flex-row lg:flex-row gap-4 justify-around items-center">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] p-2">
                        Select Accomodations
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Tell us about your trip. You can add more details later.
                    </p>
                </div>
                {/* Button div */}
                <div>
                    <div className="flex gap-4">
                        <Link to="/packageImages">
                            <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
                                Previous
                            </button>
                        </Link>
                        {/* another link */}
                        <Link to='/packageActivities'>
                            <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90">
                                Next
                            </button>
                        </Link>

                    </div>
                </div>
            </div>

            {/* accomodation div */}
            <div className="p-4 bg-black  mx-5 rounded-lg">
                <div className="mx-auto ">
                    {/* input field */}
                    <input type="text" name="" id="" placeholder='Search for accomodations' className='p-3 rounded-lg w-full mb-3 placeholder:font-bold ' />

                    {/* hotels div */}
                    <div className="flex flex-col gap-3">
                        <p className='font-bold text-lg'>Recommended Accomodaton</p>
                        <div className=" grid grid-cols-1 md:grid-cols-3 lg-grid-cols-3 rounded-lg gap-4 overflow-hidden">
                            <div className="bg-gray-800 p-5 rounded-lg flex flex-col gap-2">
                                {/* image div */}
                                <div className="">
                                    <img src={accomodationPicture} alt="" />
                                </div>
                                {/* text div */}
                                <div className="">
                                    <h4>Magistic Hotel</h4>
                                    <p>5-star hotel in las vegas</p>
                                </div>
                            </div>
                            {/* more hotels */}
                            <div className="bg-gray-800 p-5 rounded-lg flex flex-col gap-2">
                                {/* image div */}
                                <div className="">
                                    <img src={accomodationPicture} alt="" />
                                </div>
                                {/* text div */}
                                <div className="">
                                    <h4>Magistic Hotel</h4>
                                    <p>5-star hotel in las vegas</p>
                                </div>
                            </div>

                            <div className="bg-gray-800 p-5 rounded-lg flex flex-col gap-2">
                                {/* image div */}
                                <div className="">
                                    <img src={accomodationPicture} alt="" />
                                </div>
                                {/* text div */}
                                <div className="">
                                    <h4>Magistic Hotel</h4>
                                    <p>5-star hotel in las vegas</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default PackageAccomodationContent