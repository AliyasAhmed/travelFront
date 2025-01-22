import React, { useEffect } from 'react';

const TermsAndCo = () => {
    useEffect(()=>{
        window.scrollTo(0,0);
    },[])
  return (
    <div
      className="flex justify-center relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage:
          'url(https://your-image-url.com)', // Replace with your own image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="flex justify-center text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
        <p className="flex justify-center text-lg md:text-xl leading-relaxed mb-6">
          By using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        {/* Terms and Conditions Content */}
        <div className="flex flex-col text-justify space-y-6">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p>
            These terms and conditions govern your use of this website. By accessing this website, you agree to comply with these terms.
          </p>

          <h2 className="text-2xl font-semibold">2. Intellectual Property</h2>
          <p>
            All content on this website, including but not limited to text, images, and graphics, is protected by intellectual property laws.
          </p>

          <h2 className="text-2xl font-semibold">3. User Responsibilities</h2>
          <p>
            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default TermsAndCo;
