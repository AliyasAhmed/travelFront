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
      desc: "10 years of experience in software development, with a focus on full-stack applications.",
    },
    {
      name: "Faizan Farooq",
      role: "FullStack Engineer",
      img: faizan,
      desc: "Creative designer with a keen eye for user experience, specializing in full-stack development.",
    },
    {
      name: "Muzamil",
      role: "FullStack Engineer",
      img: muzamil,
      desc: "Skilled at delivering projects on time, leveraging expertise in full-stack development.",
    },
    {
      name: "Aliyas Ahmed",
      role: "FullStack Engineer",
      img: Aliyas,
      desc: "Dedicated to ensuring client satisfaction through innovative full-stack applications.",
    },
    {
      name: "Suhail Nabi",
      role: "FullStack Engineer",
      img: suhail,
      desc: "Expert in creating scalable solutions and delivering exceptional results for clients.",
    },
  ];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm animate-fade-in"
      style={{
        backgroundImage: 'url(https://your-image-url.com)', // Replace with your background image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20 text-center">
        {/* Hero Section */}
        <div className="border border-[#3f3f3f81] shadow-[0px_0px_20px_1px_lightgreen] rounded-lg w-auto p-10 backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold mb-10">Meet Our Team</h1>
          <p className="text-lg md:text-xl mb-10">
            Our dedicated team is the backbone of our success. We combine innovation and expertise to deliver exceptional results.
          </p>
        </div>

        {/* Introduction */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">About Our Team</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 w-auto">
            Our team is a group of passionate professionals who bring diverse skills and experience to every project. We collaborate to deliver creative solutions and build lasting success for our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg hover:translate-y-[-10px] transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={`Portrait of ${member.name}`}
                  className="w-40 h-40 rounded-full mb-4 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-lg text-gray-500">{member.role}</p>
                <p className="text-center mt-4">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Our Team */}
        <div className="justify-center mt-16">
          <h2 className="text-3xl font-semibold mb-4">Why Choose Our Team?</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Expertise across a wide range of fields</li>
            <li>Dedicated to delivering high-quality results</li>
            <li>Creative solutions tailored to your needs</li>
            <li>Proven track record of success</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
          <blockquote className="italic mb-4">
            "Working with this team was a game-changer. Their professionalism and expertise helped us achieve our goals faster than we imagined!"
            <br />
            — Sarah, CEO of InnovateTech
          </blockquote>
          <blockquote className="italic mb-4">
            "The team's creativity and attention to detail are unparalleled. They exceeded our expectations in every aspect."
            <br />
            — Tom, Founder of Creative Solutions
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="mt-16">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Contact Us to Work with Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default Team;
