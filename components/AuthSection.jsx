import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const AuthSection = () => {
  const { signedIn, user, setSignedIn, setUser, showProfile, setShowProfile } =
    useContext(AppContext);

  const toggleProfile = () => setShowProfile((prev) => !prev);

  const handleSignOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("UserId");
    localStorage.removeItem("UserNumber");
    setSignedIn(false);
    setUser(null);
    setShowProfile(false);
  };

  return (
    <div className="flex items-center">
      {!signedIn ? (
        <>
          <Link
            to="/login"
            className="mx-2 md:mx-4 text-sm md:text-base font-semibold text-white"
          >
            Login
          </Link>
          <Link to="/signup">
            <button
              aria-label="Sign Up"
              className="h-[40px] md:h-[50px] px-3 md:px-5 bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-white font-semibold rounded-lg shadow-md hover:shadow-lg text-sm md:text-base"
            >
              Sign Up
            </button>
          </Link>
        </>
      ) : (
        <div className="relative flex items-center">
          <button aria-label="Toggle User Menu" className="focus:outline-none" onClick={toggleProfile}>
            <BsThreeDotsVertical  className="text-2xl text-gray-200 hover:text-white" />
          </button>
          {showProfile && (
            <div className="absolute left-[10] top-10 w-40 bg-white shadow-md rounded-md z-50">
              <p className="px-4 py-2 text-gray-700 text-sm">{`Hello, ${user?.name || "User"}`}</p>
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
  );
};

export default AuthSection;