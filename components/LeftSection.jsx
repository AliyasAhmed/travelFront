import React, { useState } from 'react'

const LeftSection = () => {
    const [activeTab, setActiveTab] = useState(0); // Default to the first tab being active

    const tabs = [
        { id: 0, title: "Dashboard" },
        { id: 1, title: "AI Package Creation" },
        { id: 2, title: "Weather" },
    ];
    return (
        <>
            {/* Left Section */}
            < section
                id="leftSection"
                className="md:w-[20%] w-full md:h-full flex flex-row md:flex-col gap-2 bg-black p-4"
            >
                {
                    tabs.map((tab) => (
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
                    ))
                }
            </section >
        </>

    )
}

export default LeftSection