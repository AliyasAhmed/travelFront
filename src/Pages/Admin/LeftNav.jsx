import React from 'react'
import { Link } from "react-router-dom";

function LeftNav({setIsNavVisible}) {
    return (
      
        <div className="col-span-1 w-full h-screen flex flex-col bg-[url('../src/assets/bgImg.svg')] hover:transition-all hover:duration-300 ">
          
          <div className="pt-5 mx-3 text-xl text-center ">
            <div className="text-[#DDDDDD] text-xl ">
              <p className='font-extrabold '>Admin</p>
              <p className='font-extrabold'>Welcome Back!</p>
            </div>
          </div>
          <div>
            <ul  className="gap-y-4 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 px-0 md:px-2 lg:px-3  py-10 group text-white">
            {/* newRoutes */}
             <li className="hover:text-gray-200 cursor-pointer hover:transition-all  duration-500 ease-in-out hover:translate-x-2">
                <Link to="/admin/planDetails">
                  <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl px-2 py-4 rounded-l-lg" onClick={() => setIsNavVisible(false)}>
                    Add Plans
                  </span>
                </Link>
              </li>

              {/* service admins */}
              <li className="hover:text-gray-200 cursor-pointer hover:transition-all  duration-500 ease-in-out hover:translate-x-2">
                <Link to="/admin/agencyDetails">
                  <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl px-2 py-4 rounded-l-lg" onClick={() => setIsNavVisible(false)}>
                    Add Agencies
                  </span>
                </Link>
              </li>
              <li className="hover:text-gray-200 cursor-pointer hover:transition-all  duration-500 ease-in-out hover:translate-x-2">
              <Link to="/admin/hotelroom">
                <span className="flex items-center gap-2 text-sm md:text-lg lg:text-xl px-2 py-4 rounded-l-lg" onClick={() => setIsNavVisible(false)}>
                  Add Conversations
                </span>
              </Link>
            </li>
             
              
            </ul>
          </div>
        </div>
      );
}

export default LeftNav