import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaRegUserCircle } from "react-icons/fa";

import logo from "../src/assets/maizbaanLogo.png";
import DarkMode from "../src/Pages/darkmode";
// import betaLogo from '../src/assets/betaLogo.png'

const Navbar = () => {
  const { signedIn, user, setSignedIn, setUser, showProfile, setShowProfile } =
    useContext(AppContext);

  // Handle toggling the profile dropdown
  const toggleProfile = () => setShowProfile((prev) => !prev);

  // Optional: Sign out handler
  const handleSignOut = () => {
    // Clear localStorage items
    localStorage.removeItem("authToken");
    localStorage.removeItem("UserId");
    localStorage.removeItem("UserNumber");
    // Reset context states
    setSignedIn(false);
    setUser(null);
    setShowProfile(false);
    // (Optional) Redirect somewhere, e.g. home or login
    navigate("/");
  };

  return (
    <header className="w-full py-5 sm:px-10 px-5 ">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4  ml-3">
          <Link to="/userConvo" className="flex items-center relative">
            {/* Main Logo First */}
            <img
              className="rot w-[40px] md:w-[70px] lg:w-[60px] ml-3 opacity-80"
              src={logo}
              alt="Logo"
            />
            {/* Beta Logo After */}
            <div className="bg-white rounded-lg mx-1 px-1 animate-pulse">
              <p className="text-black font-bold">Beta</p>
            </div>
          </Link>
      <DarkMode />
        </div>
        {/* <div className='hidden md:flex lg:flex'>
          <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-lg font-extrabold"
          >Powered By WEBINVOLVE</h4>
        </div> */}

        {/* Right Section: Login/Sign Up OR User Profile */}
        <div className="flex items-center">
          {!signedIn ? (
            <>
              <Link
                to="/login"
                className={`mx-2 md:mx-4 text-sm md:text-base font-semibold {DarkModeComponent ? "text-black" : "text-white"}`}
              >
                Login
              </Link>
              <Link to="/signup">
                <button
                  aria-label="Sign Up"
                  className="h-[40px] md:h-[50px] px-3 md:px-5
                             bg-gradient-to-r from-[#A96F44] to-[#d3c75e] 
                             text-white font-semibold rounded-lg 
                             shadow-md hover:shadow-lg text-sm md:text-base"
                >
                  Sign Up
                </button>
              </Link>
            </>
          ) : (
            <div className="relative flex items-center">
              <button
                aria-label="Toggle User Menu"
                className="focus:outline-none"
                onClick={toggleProfile}
              >
                <FaRegUserCircle className="text-2xl text-gray-200 hover:text-white" />
              </button>

              {/* Dropdown menu */}
              {showProfile && (
                <div className="absolute right-0 top-10 w-40 bg-white shadow-md rounded-md z-50">
                  <p className="px-4 py-2 text-gray-700 text-sm">
                    {`Hello, ${user?.name || "User"}`}
                  </p>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;