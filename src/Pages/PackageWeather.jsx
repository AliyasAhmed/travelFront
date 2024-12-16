// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { MdOutlineWbSunny } from "react-icons/md";

// const PackageWeather = () => {
//   const weatherConditions = ['sunny', 'cloudy', 'rainy', 'snowy'];

//   const [weatherValue, setWeatherValue] = useState('')
//   const goToImages = () => {
//     return (
//       event.preventDefault()
//     )
//   }

//   const saveInfo=(e)=>{
//     return(
//       setWeatherValue(event.target.id)
//     )
//   }
//   console.log(weatherValue)
//   return (
//     <section className="w-full h-screen flex flex-col justify-center p-4  text-white">
//       {/* Top Section */}
//       <div className="max-w-5xl mx-auto space-y-6">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
//           {/* Text Section */}
//           <div className="text-center md:text-left">
//             <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-2xl md:text-3xl lg:text-4xl font-bold">
//               Weather of your destination
//             </h1>
//             <p className="text-gray-200 text-sm md:text-base mt-2">
//               Tell us about your trip, you can add more details later.
//             </p>
//           </div>
//           {/* Buttons Section */}
//           <div className="flex gap-4">
//             <Link to="/packageCreation">
//               <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
//                 Previous
//               </button>
//             </Link>
//             <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90" onClick={goToImages}>
//               Next
//             </button>
//           </div>
//         </div>

//         {/* Weather Options */}
//         <div className="bg-black rounded-lg p-6 shadow-md w-full md:w-3/4 lg:w-2/3 mx-auto">
//           <h2 className="text-lg md:text-xl font-bold mb-4">What is the weather like?</h2>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//             {/* Option */}
//             {weatherConditions.map((value) => {
//               return (
//                 <div className={` border border-gray-600 p-4 rounded-lg text-center flex flex-col items-center gap-2 hover:bg-[#272727] cursor-pointer ${weatherValue==value? 'bg-red-600':''}`}>
//                   <MdOutlineWbSunny className="text-3xl text-[#F2ECB6]" />
//                   <p className={`text-sm md:text-base`} id={value} onClick={() => saveInfo()}>{value}</p>
//                 </div>
//               )
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PackageWeather;





import React, { useEffect, useState } from 'react';
import Dashboard from '../../components/Dashboard';
import WeatherContent from '../../components/WeatherContent';
import PackageWeatherContent from '../../components/PackageWeatherContent';
import { gsap } from "gsap";


const PackageWeather = () => {
    const [activeTab, setActiveTab] = useState(1); // Default to the first tab being active

    const tabs = [
        { id: 0, title: "Dashboard" },
        { id: 1, title: "AI Package Creation" },
        { id: 2, title: "Weather" },
    ];

    useEffect(() => {
        gsap.to('#packageFirst', {
            opacity: 1,
            duration: 1,
            ease: 'power1.inOut',
        })
    }, [])

    return (
        <main className="flex flex-col md:flex-row h-screen  text-white " >
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
                // id="rightSection"
                className="flex-1 p-4 overflow-auto opacity-0"
                id='packageFirst'
            >
                {activeTab === 1 && <PackageWeatherContent />}

                {activeTab === 0 && <Dashboard />}
                {activeTab === 2 && <WeatherContent />}
            </section>
        </main>
    );
};

export default PackageWeather;
