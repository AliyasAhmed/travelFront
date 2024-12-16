// import React from 'react';
// import dashGraph from '../src/assets/dashGraph.jpg'
// import { Link } from 'react-router-dom';

// const Dashboard = () => {
//     const inquiries = [
//         {
//             name: "Millandeep",
//             email: "millandeep@webinvolve.com",
//             message: "I'm interested in a trip to Gulmarg. Can you provide some suggestions?",
//             created: "Nov 2, 10:00 AM",
//             status: "Open",
//         },
//         {
//             name: "Suhail",
//             email: "suhail@webinvolve.com",
//             message: "I'm looking for a guided tour of Kashmir. Can you suggest some options?",
//             created: "Oct 10, 7:27 PM",
//             status: "Open",
//         },
//         {
//             name: "Muzamil",
//             email: "muzamil@webinvolve.com",
//             message: "I'm planning a vacation to Kashmir. Can you help me with the arrangements?",
//             created: "Oct 26, 2:30 PM",
//             status: "Open",
//         },
//         {
//             name: "Sahreen",
//             email: "sahreen@webinvolve.com",
//             message: "I'm interested in a trip to Ladakh. Can you provide some suggestions?",
//             created: "Sep 20, 6:55 PM",
//             status: "Open",
//         },
//         {
//             name: "Raneesa",
//             email: "raneesa@webinvolve.com",
//             message: "I'm interested in a trip to Leh. Can you provide some suggestions?",
//             created: "Sep 12, 4:28 PM",
//             status: "Open",
//         },
//         {
//             name: "Tasneem",
//             email: "tasneem@webinvolve.com",
//             message: "I'm interested in a trip to Naranag. Can you provide some suggestions?",
//             created: "Sep 9, 8:35 AM",
//             status: "Open",
//         },
//     ];

//     return (
//         <section className="max-w-screen">
//             <div className="max-w-[960px]   mx-auto my-4">
//                 {/* Text Section */}
//                 <div className="">
//                     <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]">
//                         Good Afternoon User
//                     </h1>
//                 </div>
//                 <div className="my-3 text-2xl font-bold" style={{ fontFamily: '' }}>
//                     <h2>AI Activity</h2>
//                 </div>

//                 {/* Cards Section */}
//                 <div className="flex flex-col justify-around md:flex-row lg:flex-row  p-2">
//                     {/* Card */}
//                     <div className="bg-[#030303] flex flex-col justify-between p-2 h-[400px] w-[413px] border rounded-xl border-black">
//                         <div>
//                             <p className='text-gray-500 text-2xl'>Active Users</p>
//                         </div>
//                         <div>
//                             <p className=' text-2xl font-bold'>1500</p>
//                         </div>
//                         <div>
//                             <p className='text-gray-500 text-2xl'>7 Days</p>
//                         </div>
//                         <div className="h-[256px] ">
//                         <img src={dashGraph} alt="" />
//                         </div>
//                     </div>

//                     {/* Card */}
//                     <div className="bg-[#030303] flex flex-col justify-between p-2 h-[400px] w-[413px] border rounded-xl border-black">
//                         <div>
//                             <p className='text-gray-500 text-2xl'>Active Users</p>
//                         </div>
//                         <div>
//                             <p className='text-2xl font-bold '>1500</p>
//                         </div>
//                         <div>
//                             <p className='text-gray-500 text-2xl'>7 Days</p>
//                         </div>
//                         <div className="h-[256px]">
//                             <img src={dashGraph} alt="" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Create New Package Section */}
//                 <div className="my-3">
//                     <h1 className="text-2xl">Create A New Package</h1>
//                 </div>
//                 <div className="p-2">
//                     <div className="mx-auto bg-black rounded-2xl flex justify-between p-3">
//                         <div className="flex flex-col gap-2 p-3">
//                             <h2>Create A New Travel Package</h2>
//                             <p className="text-gray-400">
//                                 Generate a travel package using our chatbot and publish to our website
//                             </p>
//                         </div>
//                         <div className="flex justify-center items-center">
//                             <Link to='/packageCreation'>
//                             <button
//                                 aria-label="Generate trip plan"
//                                 className="h-[55px] px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg shadow-md hover:shadow-lg flex items-center"
//                             >
//                                 Let's Go!
//                             </button>
//                             </Link>

//                         </div>
//                     </div>
//                 </div>

//                 {/* Client Inquiries Section */}
//                 <div className="ml-4  p-2">
//                     <h1 className="text-2xl mb-4">Client Inquiries</h1>
//                     <div className="overflow-x-auto  p-2">
//                         <table className="min-w-full table-auto border-collapse  bg-black">
//                             <thead>
//                                 <tr className="bg-gray-800">
//                                     <th className="px-4 py-2 text-left border border-gray-700">Name</th>
//                                     <th className="px-4 py-2 text-left border border-gray-700">Email</th>
//                                     <th className="px-4 py-2 text-left border border-gray-700">Message</th>
//                                     <th className="px-4 py-2 text-left border border-gray-700">Created</th>
//                                     <th className="px-4 py-2 text-left border border-gray-700">Status</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {inquiries.map((inquiry, index) => (
//                                     <tr
//                                         key={index}
//                                         className={`${
//                                             index % 2 === 0 ? 'bg-black' : 'bg-black '
//                                         } hover:bg-gray-700`}
//                                     >
//                                         <td className="px-4 py-2 border border-gray-700">{inquiry.name}</td>
//                                         <td className="px-4 py-2 border border-gray-700">{inquiry.email}</td>
//                                         <td className="px-4 py-2 border border-gray-700">{inquiry.message}</td>
//                                         <td className="px-4 py-2 border border-gray-700">{inquiry.created}</td>
//                                         <td className="px-4 py-2 border border-gray-700">
//                                             <span className="bg-green-600 text-sm px-3 py-1 rounded-full text-gray-100">
//                                                 {inquiry.status}
//                                             </span>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Dashboard;


// my working code
import React, { useEffect } from 'react';
import dashGraph from '../src/assets/dashGraph.jpg';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const Dashboard = () => {
    const inquiries = [
        // Inquiry data remains unchanged
    ];

   useEffect(()=>{
        gsap.fromTo('.dashboardSection',{opacity:0},
            {opacity:1,duration:1,delay:.5}
        )
   },[])
    

    return (
        <section className="max-w-screen text-white dashboardSection" >
            <div className="max-w-6xl mx-auto px-4 py-6">
                {/* Greeting Section */}
                <div className="mb-6">
                    <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6]">
                        Good Afternoon User
                    </h1>
                </div>

                {/* AI Activity Section */}
                <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">AI Activity</h2>
                </div>

                {/* Cards Section */}
                <div className="grid gap-6 md:grid-cols-2 overflow-hidden">
                    {/* Card 1 */}
                    <div className="bg-[#030303] flex flex-col justify-between p-4 rounded-xl shadow-md border border-gray-700">
                        <div>
                            <p className="text-gray-500 text-lg">Active Users</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">1500</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-lg">7 Days</p>
                        </div>
                        <div className="h-[200px]">
                            <img src={dashGraph} alt="Graph" className="w-full h-full object-cover rounded-md" />
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div className="bg-[#030303] flex flex-col justify-between p-4 rounded-xl shadow-md border border-gray-700">
                        <div>
                            <p className="text-gray-500 text-lg">Active Users</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">1500</p>
                        </div>
                        <div>
                            <p className="text-gray-500 text-lg">7 Days</p>
                        </div>
                        <div className="h-[200px]">
                            <img src={dashGraph} alt="Graph" className="w-full h-full object-cover rounded-md" />
                        </div>
                    </div>
                </div>

                {/* Create New Package Section */}
                <div className="my-8">
                    <h2 className="text-2xl font-semibold mb-4">Create A New Package</h2>
                    <div className="bg-black rounded-2xl flex flex-col md:flex-row justify-between items-center p-4 gap-4">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-xl font-bold">Create A New Travel Package</h3>
                            <p className="text-gray-400">
                                Generate a travel package using our chatbot and publish to our website.
                            </p>
                        </div>
                        <div>
                            <Link to="/packageCreation">
                                <button
                                    aria-label="Generate trip plan"
                                    className="h-12 px-6 bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg shadow-md hover:shadow-lg"
                                >
                                    Let's Go!
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Client Inquiries Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 overflow-hidden">Client Inquiries</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse bg-black text-sm">
                            <thead>
                                <tr className="bg-gray-800 text-left text-gray-300">
                                    <th className="px-4 py-2 border border-gray-700">Name</th>
                                    <th className="px-4 py-2 border border-gray-700">Email</th>
                                    <th className="px-4 py-2 border border-gray-700">Message</th>
                                    <th className="px-4 py-2 border border-gray-700">Created</th>
                                    <th className="px-4 py-2 border border-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inquiries.map((inquiry, index) => (
                                    <tr
                                        key={index}
                                        className={`${index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#121212]'
                                            } hover:bg-gray-700`}
                                    >
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.name}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.email}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.message}</td>
                                        <td className="px-4 py-2 border border-gray-700">{inquiry.created}</td>
                                        <td className="px-4 py-2 border border-gray-700">
                                            <span className="bg-green-600 text-xs px-3 py-1 rounded-full text-gray-100">
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
