import React from 'react'
import SideBar from '../../components/SideBar'
import Main from '../../components/Main'

const UserConvo = () => {
  return (
    <div className="flex animate-fadeIn duration-1000 flex-col lg:flex-row">
      {/* Sidebar */}
      <SideBar className="w-full lg:w-1/4" />
      
      {/* Main content */}
      <Main className="w-full lg:w-3/4" />
    </div>
  )
}

export default UserConvo


//new code 
// import React, { useState } from 'react';
// import SideBar from '../../components/SideBar';
// import Main from '../../components/Main';

// const UserConvo = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       {/* Hamburger Icon */}
//       <button
//         onClick={toggleSidebar}
//         className="fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-md focus:outline-none"
//         aria-label="Toggle Sidebar"
//       >
//         ☰
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-transparent z-40 transform ${
//           isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//         } transition-transform duration-300 ease-in-out`}
//       >
//         <SideBar />
//       </div>

//       {/* Main Content */}
//       <div
//         className={`transition-all duration-300 ease-in-out ${
//           isSidebarOpen ? 'ml-64' : ''
//         }`}
//       >
//         <Main />
//       </div>
//     </div>
//   );
// };

// export default UserConvo;
