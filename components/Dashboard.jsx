import React from 'react';
import dashGraph from '../src/assets/dashGraph.jpg'

const Dashboard = () => {
    const inquiries = [
        {
            name: "Millandeep",
            email: "millandeep@webinvolve.com",
            message: "I'm interested in a trip to Gulmarg. Can you provide some suggestions?",
            created: "Nov 2, 10:00 AM",
            status: "Open",
        },
        {
            name: "Suhail",
            email: "suhail@webinvolve.com",
            message: "I'm looking for a guided tour of Kashmir. Can you suggest some options?",
            created: "Oct 10, 7:27 PM",
            status: "Open",
        },
        {
            name: "Muzamil",
            email: "muzamil@webinvolve.com",
            message: "I'm planning a vacation to Kashmir. Can you help me with the arrangements?",
            created: "Oct 26, 2:30 PM",
            status: "Open",
        },
        {
            name: "Sahreen",
            email: "sahreen@webinvolve.com",
            message: "I'm interested in a trip to Ladakh. Can you provide some suggestions?",
            created: "Sep 20, 6:55 PM",
            status: "Open",
        },
        {
            name: "Raneesa",
            email: "raneesa@webinvolve.com",
            message: "I'm interested in a trip to Leh. Can you provide some suggestions?",
            created: "Sep 12, 4:28 PM",
            status: "Open",
        },
        {
            name: "Tasneem",
            email: "tasneem@webinvolve.com",
            message: "I'm interested in a trip to Naranag. Can you provide some suggestions?",
            created: "Sep 9, 8:35 AM",
            status: "Open",
        },
    ];

    return (
        <section className="max-w-screen">
            <div className="max-w-[960px]   mx-auto my-4">
                {/* Text Section */}
                <div className="">
                    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]">
                        Good Afternoon User
                    </h1>
                </div>
                <div className="my-3 text-2xl font-bold" style={{ fontFamily: '' }}>
                    <h2>AI Activity</h2>
                </div>

                {/* Cards Section */}
                <div className="flex flex-col justify-around md:flex-row lg:flex-row  p-2">
                    {/* Card */}
                    <div className="bg-[#030303] flex flex-col justify-between p-2 h-[400px] w-[413px] border rounded-xl border-black">
                        <div>
                            <p className='text-gray-500 text-2xl'>Active Users</p>
                        </div>
                        <div>
                            <p className=' text-2xl font-bold'>1500</p>
                        </div>
                        <div>
                            <p className='text-gray-500 text-2xl'>7 Days</p>
                        </div>
                        <div className="h-[256px] ">
                        <img src={dashGraph} alt="" />
                        </div>
                    </div>

                    {/* Card */}
                    <div className="bg-[#030303] flex flex-col justify-between p-2 h-[400px] w-[413px] border rounded-xl border-black">
                        <div>
                            <p className='text-gray-500 text-2xl'>Active Users</p>
                        </div>
                        <div>
                            <p className='text-2xl font-bold '>1500</p>
                        </div>
                        <div>
                            <p className='text-gray-500 text-2xl'>7 Days</p>
                        </div>
                        <div className="h-[256px]">
                            <img src={dashGraph} alt="" />
                        </div>
                    </div>
                </div>

                {/* Create New Package Section */}
                <div className="my-3">
                    <h1 className="text-2xl">Create A New Package</h1>
                </div>
                <div className="p-2">
                    <div className="mx-auto bg-black rounded-2xl flex justify-between p-3">
                        <div className="flex flex-col gap-2 p-3">
                            <h2>Create A New Travel Package</h2>
                            <p className="text-gray-400">
                                Generate a travel package using our chatbot and publish to our website
                            </p>
                        </div>
                        <div className="flex justify-center items-center">
                            <button
                                aria-label="Generate trip plan"
                                className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg shadow-md hover:shadow-lg flex items-center"
                            >
                                Let's Go!
                            </button>
                        </div>
                    </div>
                </div>

                {/* Client Inquiries Section */}
                <div className="ml-4  p-2">
                    <h1 className="text-2xl mb-4">Client Inquiries</h1>
                    <div className="overflow-x-auto  p-2">
                        <table className="min-w-full table-auto border-collapse  bg-black">
                            <thead>
                                <tr className="bg-gray-800">
                                    <th className="px-4 py-2 text-left border border-gray-700">Name</th>
                                    <th className="px-4 py-2 text-left border border-gray-700">Email</th>
                                    <th className="px-4 py-2 text-left border border-gray-700">Message</th>
                                    <th className="px-4 py-2 text-left border border-gray-700">Created</th>
                                    <th className="px-4 py-2 text-left border border-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.map((inquiry, index) => (
                                    <tr
                                        key={index}
                                        className={`${
                                            index % 2 === 0 ? 'bg-black' : 'bg-black '
                                        } hover:bg-gray-700`}
                                    >
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.name}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.email}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.message}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.created}</td>
                                        <td className="px-4 py-2 border border-gray-700">
                                            <span className="bg-green-600 text-sm px-3 py-1 rounded-full text-gray-100">
                                                {inquiry.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
