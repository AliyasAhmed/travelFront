// import React from 'react'
// import { Link } from 'react-router-dom'
// import navLogo from '../src/assets/navLogo.svg'


// const PackageCreation = () => {
//     return (
//         <section className='max-w-full h-screen  flex items-center '>
//             <div className="w-full p-4">
//                 <div className='flex items-center gap-2'>
//                     <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-2xl md:text-4xl lg:text-4xl font-bold'>Create A Trip Package</h1>
//                     <img src={navLogo} alt="" className='' />
//                 </div>

//                 <p className='text-gray-400 text-lg'>Tell us about your trip. You can add more details later</p>
//                 <div className='p-3 '>

//                     <div className=' bg-black p-5 rounded-2xl'>

//                         <h1 className='font-bold text-lg'>Enter Destination Of Your Package</h1>
//                         <div className='md:flex lg:flex  mt-4 mb-2 gap-2'>
//                             <input type="text" name="" id="" className='rounded-lg w-full overflow-hidden p-3 mb-3 lg:mb-0 md:mb-0 text-black ' placeholder='Eg, GULMARG, SONMARG, PAHALGAM' />
//                             <div className='flex justify-center overflow-hidden rounded-lg'>
//                                 <Link to='/packageWeather'>
//                                     <button
//                                         aria-label="Generate trip plan"
//                                         className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg  shadow-md hover:shadow-lg flex items-center"
//                                     >
//                                         Generate
//                                     </button>
//                                 </Link>
//                             </div>

//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default PackageCreation


import React, { useState } from 'react';
import PackageCreationContent from './PackageCreationContent';
import Dashboard from './Dashboard';
import WeatherContent from './WeatherContent';

const PackageCreation = () => {
    const [activeTab, setActiveTab] = useState(1); // Default to the first tab being active

    const tabs = [
        { id: 0, title: "Dashboard" },
        { id: 1, title: "AI Package Creation" },
        { id: 2, title: "Weather" },
    ];

    return (
        <main className="flex flex-col md:flex-row h-screen  text-white">
            {/* Left Section */}
            <section
                id="leftSection"
                className="md:w-[20%] w-full md:h-full flex flex-row md:flex-col gap-2 bg-black p-4"
            >
                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`p-3 rounded-xl text-center font-semibold cursor-pointer transition duration-200 ${activeTab === tab.id
                                ? "bg-gradient-to-r from-[#b97a4a] to-[#b1a10f] text-black shadow-md"
                                : "bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-black hover:shadow-md"
                            }`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        <p>{tab.title}</p>
                    </div>
                ))}
            </section>

            {/* Right Section */}
            <section
                id="rightSection"
                className="flex-1 p-4 overflow-auto"
            >
                {activeTab === 1 && <PackageCreationContent />}

                {activeTab === 0 && <Dashboard />}
                {activeTab === 2 && <WeatherContent />}
            </section>
        </main>
    );
};

export default PackageCreation;
