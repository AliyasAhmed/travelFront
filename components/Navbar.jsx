import React, { useContext } from 'react'
import navLogo from '../src/assets/navLogo.svg'
import { Link } from 'react-router-dom'
// import { Context } from '../src/App'
import Logout from './Logout'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    // const [signedIn, setSignedIn] = useContext(Context)
    const { signedIn, user, setSignedIn, setUser } = useContext(AppContext);

    
    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center   bg-gradient-to-r from-[#0000] via-[#0000] to-[#0000]">
            <nav className="flex w-full justify-between items-center screen-max-width bg-transparent  ">
                <div className='flex items-center gap-4'>
                    <h6 className=' text-lg hidden md:flex lg:flex'>Product </h6>
                    <Link to='/'>

                        <img src={navLogo} alt="" className='' />

                    </Link>
                </div>
                <div className='hidden md:flex lg:flex'>
                    <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg"
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                        }}
                    >Powered By WEBINVOLVE</h4>
                </div>

                {!signedIn ?
                    <div className='flex items-center '>


                        <Link to='/login'>
                            <button className='mx-4 text-lg font-semibold' >
                                Login
                            </button>
                        </Link>



                        <Link to='/signup'>
                            <button
                                aria-label="Generate trip plan"
                                className=" h-[45px] md:h-[50px] p-3  bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-white font-bold rounded-lg shadow-md hover:shadow-lg  mx-auto "
                            >
                                Sign Up
                            </button>
                        </Link>

                    </div>

                    :
                    <div className="">
                        <Logout/>
                    </div>

                }


            </nav>
        </header>
    )
}

export default Navbar

