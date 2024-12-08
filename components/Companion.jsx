import React from 'react'
import frame1 from '../src/assets/frame1.svg'
import frame2 from '../src/assets/frame2.svg'
import try3 from '../src/assets/try3.svg'



const Companion = () => {
    return (
        <div className="border border-red-600 bg-gradient-to-tr from-[#000] via-[#000] to-[#0000]">
            <div className="text-center max-w-full px-6  border border-red-600 mx-auto mt-36 mb-12 ">
                <h1 className="text-xl md:text-5xl leading-tight font-inter font-semibold">
                    Travel Companion For All Your YES Moments
                </h1>
                {/* cards */}
                <div className='border border-red-600'>
                    <img src={try3} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Companion