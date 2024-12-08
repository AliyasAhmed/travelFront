// import React, { useState } from 'react'

// const DashBoard = () => {
//     const [active, setactive] = useState(0);
//     const tabs = [
//         {
//             id: 0,
//             title: "Dashboard",
//         },
//         {
//             id: 1,
//             title: "Ai package creation",
//         },
//         {
//             id: 2,
//             title: "Weather",
//         }
//     ]

//     console.log(active)
//     return (
//         <main className="border border-red-600 flex flex-row ">
//             {/* left section */}
//             <section id='leftSection' className="h-screen w-[20%] border border-red-700 flex flex-col gap-2 bg-black p-2">

//                 {tabs.map((value, id) => {
//                     return (
//                         <div className={`p-3 border rounded-2xl border-gray-400 bg-gradient-to-r from-[#A96F44] to-[#d3c75e] ${active === value.id
//                                 ? "bg-red-700 text-white"
//                                 : ""
//                             }`} onClick={() => setactive(value.id)} key={id}>
//                             <p>{value.title}</p>
//                         </div>
//                     )
//                 })}



//             </section>

//             {/* right section */}
//             <section id='rightSection' className="">

//             </section>

//         </main>

//     )
// }

// export default DashBoard




import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import Dashboard from '../../components/Dashboard';

const DashBoard = () => {
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab being active

    const tabs = [
        {
            id: 0,
            title: "Dashboard",
        },
        {
            id: 1,
            title: "AI Package Creation",
        },
        {
            id: 2,
            title: "Weather",
        },
    ];

    return (
        <main className="flex flex-row">
            {/* Left Section */}
            <section
                id="leftSection"
                className=" w-[20%]  flex flex-col gap-2 bg-black p-2"
            >

                {tabs.map((tab) => (
                    <div
                        key={tab.id}
                        className={`p-3 border rounded-2xl border-gray-400 cursor-pointer ${activeTab === tab.id
                            ? "bg-gradient-to-r from-[#b97a4a] to-[#b1a10f] text-black"
                            : "bg-gradient-to-r from-[#A96F44] to-[#d3c75e] text-black"
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
                className="flex-1 "
            >
                {activeTab === 0 && <Dashboard/>  }
                {activeTab === 1 && <p>You are on the AI Package Creation tab</p>}
                {activeTab === 2 && <p>You are on the Weather tab</p>}
            </section>
        </main>
    );
};

export default DashBoard;
