import React, { useEffect } from "react";

const PrivacyPol = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: "url(https://your-image-url.com)", // Replace with your own image URL
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-6xl backdrop-blur-lg border border-gray-700 rounded-lg p-8 md:p-16 shadow-lg animate-fade-in bg-[#0000005d]">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold mb-8 text-white drop-shadow-lg">
          Privacy Policy
        </h1>
        <p className="text-center text-xl md:text-2xl leading-relaxed mb-10 text-gray-200">
          Your privacy is important to us. This Privacy Policy outlines how we
          collect, use, and safeguard your personal information while you
          interact with our website.
        </p>

        {/* Privacy Policy Sections */}
        <div className="space-y-10 text-justify text-gray-400">
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              1. Information Collection
            </h2>
            <p>
              We gather personal information that you provide when interacting
              with our website, such as your name, email address, and any data
              collected from cookies or analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              The data we collect helps us deliver and improve our services,
              communicate with you, and personalize your user experience. We do
              not share your information without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              3. Data Protection
            </h2>
            <p>
              We use advanced security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              4. Your Rights
            </h2>
            <p>
              You have full rights to access, update, or delete your personal
              information. Feel free to contact us to exercise these rights or
              inquire about how we handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              5. Policy Updates
            </h2>
            <p>
              We reserve the right to update this Privacy Policy periodically.
              Any changes will be reflected on this page with a clear revision
              date.
            </p>
          </section>
        </div>

        {/* Call-to-Action */}
        <div className="flex justify-center mt-12">
          <a
            href="/contact"
            className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300"
          >
            Contact Us for More Information
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPol;
