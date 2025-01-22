import React, { useState } from 'react';
import Dashboard from '../../components/Dashboard';
import WeatherContent from '../../components/WeatherContent';
import PackageActivitiesContent from '../../components/PackageActivitiesContent';


const PackageActivities = () => {
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
                {activeTab === 1 && <PackageActivitiesContent />}

                {activeTab === 0 && <Dashboard />}
                {activeTab === 2 && <WeatherContent />}
            </section>
        </main>
    );
};

export default PackageActivities;
