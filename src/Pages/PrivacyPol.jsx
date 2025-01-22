import React, { useEffect } from "react";

const PrivacyPol = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage: "url(https://your-image-url.com)", // Replace with your own image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website.
        </p>

        {/* Privacy Policy Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">1. Information Collections</h2>
          <p>
            We collect personal information when you interact with our website,
            such as your name, email address, and usage data.
          </p>

          <h2 className="text-2xl font-semibold">
            2. How We Use Your Information
          </h2>
          <p>
            We use the collected information to provide and improve our
            services, communicate with you, and personalize your experience.
          </p>

          <h2 className="text-2xl font-semibold">3. Data Protection</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access or disclosure.
          </p>

          <h2 className="text-2xl font-semibold">4. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information at any time. Contact us if you wish to exercise these
            rights.
          </p>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPol;
