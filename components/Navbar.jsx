import React from 'react'
import navLogo from '../src/assets/navLogo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center   bg-gradient-to-r from-[#000] via-[#000] to-[#0000]">
            <nav className="flex w-full justify-between items-center screen-max-width bg-transparent">
                <div className='flex items-center gap-4 '>
                    <h6 className=' text-lg '>Product </h6>
                    <Link to='/'>

                        <img src={navLogo} alt="" className='' />

                    </Link>
                </div>
                <div>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg" 
                    style={{
                        fontFamily: "'Dancing Script', cursive",
                      }}
                    >Powered By WEBINVOLVE</h4>
                </div>
                <div>

                    <Link to='/login'>
                        <button className='mx-4 text-lg font-semibold'>
                            Login
                        </button>
                    </Link>


                    <Link to='/signup'>
                        <button
                            aria-label="Generate trip plan"
                            className="h-[50px] px-6 bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-white font-bold rounded-lg shadow-md hover:shadow-lg  mx-auto "
                        >
                            Sign Up
                        </button>
                    </Link>

                </div>
            </nav>
        </header>
    )
}

export default Navbar

