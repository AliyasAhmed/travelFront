import React, { useEffect } from 'react';
import faizan from '../assets/faizan.jpg'
import Aliyas from '../assets/aliyas.jpg'
import Millan from '../assets/millan.jpg'
import suhail from "../assets/suhail.jpg"
import muzamil from '../assets/muzamil.jpg'
const Team = () => {
  useEffect(()=>{
    window.scrollTo(0,0);

  },[])
  return (
    <div className="relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage: 'url(https://your-image-url.com)', // Replace with your background image
      }}>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20 text-center">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
        <p className="text-lg md:text-xl mb-6">
          Our dedicated team is the backbone of our success. We combine innovation and expertise to deliver exceptional results.
        </p>

        {/* Introduction */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">About Our Team</h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Our team is a group of passionate professionals who bring diverse skills and experience to every project we take on.
            We collaborate to deliver creative solutions and build lasting success for our clients.
          </p>
        </div>

        {/* Team Members */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Example Team Member 1 */}
            <div className="flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg">
              <img
                src={Millan} // Replace with actual team member image URL
                alt="Team Member 1"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Millan Deep Singh</h3>
              <p className="text-lg text-gray-500">FullStack Engineer</p>
              <p className="text-center mt-4">
                John has over 10 years of experience in software development, with a focus on full-stack applications.
              </p>
            </div>
            {/* Example Team Member 2 */}
            <div className="flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg">
              <img
                src={faizan} // Replace with actual team member image URL
                alt="Team Member 2"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Faizan Farooq</h3>
              <p className="text-lg text-gray-500">FullStack Engineer</p>
              <p className="text-center mt-4">
                Faizan is a creative designer with a keen eye for user experience and interface design, specializing in FullStack Development.
              </p>
            </div>
            {/* Example Team Member 3 */}
            <div className="flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg">
              <img
                src={muzamil} // Replace with actual team member image URL
                alt="Team Member 3"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Muzamil </h3>
              <p className="text-lg text-gray-500">FullStack Engineer</p>
              <p className="text-center mt-4">
                Muzamil ensures that projects are delivered on time and meet client expectations, leveraging his FullStack applications skills.
              </p>
            </div>
            {/* Example Team Member 4 */}
            <div className="flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg">
              <img
                src={Aliyas} // Replace with actual team member image URL
                alt="Team Member 3"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Aliyas Ahmed</h3>
              <p className="text-lg text-gray-500">FullStack Engineer</p>
              <p className="text-center mt-4">
                Aliyas ensures that projects are delivered on time and meet client expectations, leveraging his FullStack Application skills.
              </p>
            </div>
            {/* Example Team Member 5 */}
            <div className="flex flex-col items-center bg-[#0000001e] p-6 rounded-md shadow-lg">
              <img
                src={suhail} // Replace with actual team member image URL
                alt="Team Member 3"
                className="w-40 h-40 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Suhail nabi</h3>
              <p className="text-lg text-gray-500">FullStack Engineer</p>
              <p className="text-center mt-4">
                Suhail ensures that projects are delivered on time and meet client expectations, leveraging in FullStack Development skills.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Our Team */}
        <div className="  justify-center mt-16">
          <h2 className=" text-3xl font-semibold mb-4">Why Choose Our Team?</h2>
          <ul className="  list-disc list-inside text-lg">
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
