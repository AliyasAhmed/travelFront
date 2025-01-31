// import React, { useContext } from 'react'
// import navLogo from '../src/assets/navLogo.svg'
// import { Link } from 'react-router-dom'
// // import { Context } from '../src/App'
// import Logout from './Logout'
// import { AppContext } from '../context/AppContext'
// import { FaRegUserCircle } from 'react-icons/fa'
// import logo from '../src/assets/maizbaanLogo.png'
// import betaLogo from '../src/assets/betaLogo.png'

// const Navbar = () => {
//     // const [signedIn, setSignedIn] = useContext(Context)
//     const { signedIn, user, setSignedIn, setUser, showProfile, setShowProfile } = useContext(AppContext);


//     return (
//         <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center   bg-gradient-to-r from-[#0000] via-[#0000] to-[#0000]">
//             <nav className="flex w-full justify-between items-center screen-max-width bg-transparent  ">
//                 <div className='flex items-center gap-4'>
//                     {/* <h6 className=' text-lg hidden md:flex lg:flex'>Product </h6> */}
//                     <Link to='/' className="flex items-center relative">
//     {/* Beta Logo */}
//     <img
//         src={betaLogo}
//         className='animate-pulse h-[20px] md:h-[25px] lg:h-[30px]'
//         alt="Beta"
//     />
//     {/* Main Logo */}
//     <img
//         className='w-[40px] md:w-[70px] lg:w-[60px] ml-2 opacity-80'
//         src={logo}
//         alt="Logo"
//     />
// </Link>


//                 </div>
//                 <div className='hidden md:flex lg:flex'>
//                     <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg"
//                         style={{
//                             fontFamily: "'Dancing Script', cursive",
//                         }}
//                     >Powered By WEBINVOLVE</h4>
//                 </div>

//                 {!signedIn ?
//                     <div className='flex items-center '>


//                         <Link to='/login'>
//                             <button className="mx-2 md:mx-4 text-base md:text-lg font-semibold">
//                                 Login
//                             </button>
//                         </Link>

//                         <Link to='/signup'>
//                             <button
//                                 aria-label="Generate trip plan"
//                                 className="h-[40px] md:h-[50px] p-2 md:p-3 bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg mx-auto text-sm md:text-base"
//                             >
//                                 Sign Up
//                             </button>
//                         </Link>

//                     </div>

//                     :
//                     <div className="">
//                         {/* <Logout/> */}
//                         <FaRegUserCircle className="text-2xl text-gray-200 mr-2" onClick={() => setShowProfile(!showProfile)} />

//                     </div>

//                 }


//             </nav>
//         </header>
//     )
// }

// export default Navbar


import React, { useContext } from 'react'
import navLogo from '../src/assets/navLogo.svg'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { FaRegUserCircle } from 'react-icons/fa'
import logo from '../src/assets/maizbaanLogo.png'
import betaLogo from '../src/assets/betaLogo.png'

const Navbar = () => {
    const { signedIn, user, setSignedIn, setUser, showProfile, setShowProfile } = useContext(AppContext);

    return (
        <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center bg-gradient-to-r from-[#0000] via-[#0000] to-[#0000]">
            <nav className="flex w-full justify-between items-center screen-max-width bg-transparent">
                <div className='flex items-center gap-4  ml-3'>
                    <Link to='/' className="flex items-center relative">
                        {/* Main Logo First */}
                        <img
                            className='w-[40px] md:w-[70px] lg:w-[60px] ml-3 opacity-80'
                            src={logo}
                            alt="Logo"
                        />
                        {/* Beta Logo After */}
                        <img
                            src={betaLogo}
                            className='animate-pulse h-[20px] md:h-[25px] lg:h-[30px]'
                            alt="Beta"
                        />
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
                            <button className="mx-2 md:mx-4 text-base md:text-lg font-semibold">
                                Login
                            </button>
                        </Link>

                        <Link to='/signup'>
                            <button
                                aria-label="Generate trip plan"
                                className="h-[40px] md:h-[50px] p-2 md:p-3 bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg mx-auto text-sm md:text-base"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                    :
                    <div className="">
                        <FaRegUserCircle className="text-2xl text-gray-200 mr-2" onClick={() => setShowProfile(!showProfile)} />
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar

