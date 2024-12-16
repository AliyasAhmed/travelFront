// import { div } from 'framer-motion/client';
// import React, { useState } from 'react';
// import Dashboard from '../../components/Dashboard';
// import PackageCreation from '../../components/PackageCreation';
// import WeatherContent from '../../components/WeatherContent';

// const DashBoard = () => {
//     const [activeTab, setActiveTab] = useState(0); // Default to the first tab being active

//     const tabs = [
//         {
//             id: 0,
//             title: "Dashboard",
//         },
//         {
//             id: 1,
//             title: "AI Package Creation",
//         },
//         {
//             id: 2,
//             title: "Weather",
//         },
//     ];

//     return (
//         <main className="flex flex-row">
//             {/* Left Section */}
//             <section
//                 id="leftSection"
//                 className=" w-[20%]  flex flex-col gap-2 bg-black p-2"
//             >

//                 {tabs.map((tab) => (
//                     <div
//                         key={tab.id}
//                         className={`p-3 border rounded-2xl border-gray-400 cursor-pointer ${activeTab === tab.id
//                             ? "bg-gradient-to-r from-[#b97a4a] to-[#b1a10f] text-black"
//                             : "bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-black"
//                             }`}
//                         onClick={() => setActiveTab(tab.id)}
//                     >
//                         <p>{tab.title}</p>
//                     </div>
//                 ))}
//             </section>

//             {/* Right Section */}
//             <section
//                 id="rightSection"
//                 className="flex-1 "
//             >
//                 {activeTab === 0 && <Dashboard/>  }
//                 {activeTab === 1 && <PackageCreation />}
//                 {activeTab === 2 && <WeatherContent />}
//             </section>
//         </main>
//     );
// };

// export default DashBoard;



import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import PackageCreation from '../../components/PackageCreation';
import WeatherContent from '../../components/WeatherContent';
import PackageCreationContent from '../../components/PackageCreationContent';

const DashBoard = () => {
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab being active

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
                        className={`p-3 rounded-xl text-center font-semibold cursor-pointer transition duration-200 ${
                            activeTab === tab.id
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
                {activeTab === 0 && <Dashboard />}
                {activeTab === 1 && <PackageCreationContent />}
                {activeTab === 2 && <WeatherContent />}
            </section>
        </main>
    );
};

export default DashBoard;
