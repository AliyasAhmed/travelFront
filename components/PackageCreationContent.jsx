import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import navLogo from '../src/assets/navLogo.svg'
import gsap from 'gsap'


const PackageCreationContent = () => {
    useEffect(() => {
        gsap.to('.dashboard', {
            opacity: 1,
            duration:2,
            delay:.5,
        })

    })

    return (
        <section className='max-w-full h-screen  flex items-center opacity-0 dashboard' id='dashboard'>
            <div className="w-full p-4">
                <div className='flex items-center gap-2'>
                    <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-2xl md:text-4xl lg:text-4xl font-bold'>Create A Trip Package</h1>
                    <img src={navLogo} alt="" className='' />
                </div>

                <p className='text-gray-400 text-lg'>Tell us about your trip. You can add more details later</p>
                <div className='p-3 '>

                    <div className=' bg-black p-5 rounded-2xl'>

                        <h1 className='font-bold text-lg'>Enter Destination Of Your Package</h1>
                        <div className='md:flex lg:flex  mt-4 mb-2 gap-2'>
                            <input type="text" name="" id="" className='rounded-lg w-full overflow-hidden p-3 mb-3 lg:mb-0 md:mb-0 text-black ' placeholder='Eg, GULMARG, SONMARG, PAHALGAM' />
                            <div className='flex justify-center overflow-hidden rounded-lg'>
                                <Link to='/packageWeather'>
                                    <button
                                        aria-label="Generate trip plan"
                                        className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg  shadow-md hover:shadow-lg flex items-center"
                                    >
                                        Generate
                                    </button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageCreationContent