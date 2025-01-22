import React, { useEffect } from "react";

const About = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <div
      className="relative flex justify-center min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage:
          'url(https://your-image-url.com)', 
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="flex justify-center text-4xl md:text-5xl font-bold mb-4">About Us</h1>
        <p className="flex w-[50vw] justify-center text-justify text-lg md:text-xl leading-relaxed">
          Welcome to our website! We are a team of passionate individuals who
          are committed to providing the best service. Our mission is to help
          people achieve their goals and make the world a better place. We value
          innovation, creativity, and excellence in everything we do.
        </p>
      </div>
    </div>
  );
};

export default About;
