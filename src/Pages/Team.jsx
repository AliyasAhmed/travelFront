import React, { useEffect } from 'react';
import faizan from '../assets/faizan.jpg';
import Aliyas from '../assets/aliyas.jpg';
import Millan from '../assets/millan.jpg';
import suhail from "../assets/suhail.jpg";
import muzamil from '../assets/muzamil.jpg';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Millan Deep Singh",
      role: "FullStack Engineer",
      img: Millan,
      desc: "software developer, focusing on full-stack applications."
    },
    {
      name: "Faizan Farooq",
      role: "FullStack Engineer",
      img: faizan,
      desc: "Creative designer with expertise in user experience and full-stack development."
    },
    {
      name: "Muzamil",
      role: "FullStack Engineer",
      img: muzamil,
      desc: "Skilled in delivering projects on time, leveraging full-stack expertise."
    },
    {
      name: "Aliyas Ahmed",
      role: "FullStack Engineer",
      img: Aliyas,
      desc: "Dedicated to ensuring client satisfaction through innovative applications."
    },
    {
      name: "Suhail Nabi",
      role: "FullStack Engineer",
      img: suhail,
      desc: "Expert in creating scalable solutions and delivering exceptional results."
    },
  ];

  return (
    <div className="relative min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative w-full text-center p-12 md:p-20">
        <h1 className="text-5xl font-bold uppercase">Where You Thrive Together.</h1>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          In our welcoming community, you'll find understanding and support from people who share
          similar experiences and challenges. We're here for you every step of your journey.
        </p>
      </div>

      {/* About Us Section */}
      <div className="text-center px-10 md:px-20 py-10">
        <h2 className="text-4xl font-bold text-yellow-400">About Us</h2>
        <p className="text-lg text-gray-100 mt-4 max-w-3xl mx-auto">
          Maizbaan was born from a shared passion for technology and innovation. Our team is dedicated
          to delivering high-quality solutions that are engaging, accessible, and community-focused.
        </p>
      </div>

      {/* Meet The Team Section */}
      <div className="text-center px-10 md:px-20 py-10">
        <h2 className="text-4xl font-bold">Meet the Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg text-center shadow-md hover:shadow-lg transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-gray-600"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-yellow-400">{member.role}</p>
              <p className="text-gray-400 mt-3">{member.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-16">
        <h2 className="text-3xl font-semibold">Join Our Team</h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Want to work with an innovative and passionate team? Let's build something great together.
        </p>
        <div className="flex justify-center mt-6 px-6 py-3 w-[15rem] mx-auto bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition">
        <a href='/contact' >
          Contact Us
        </a>
        </div>
      </div>
    </div>
  );
};

export default Team;