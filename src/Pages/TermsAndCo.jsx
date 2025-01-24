import React, { useEffect } from 'react';

const TermsAndCo = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative flex justify-center items-center min-h-screen bg-cover bg-center text-white p-8"
      style={{
        backgroundImage: 'url(https://your-image-url.com)', // Replace with your image URL
      }}
    >

      {/* Content */}
      <div className="relative z-10 max-w-5xl backdrop-blur-lg border border-gray-700 rounded-lg p-8 md:p-12 shadow-lg bg-[#0000005d] ">
        <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
          Terms and Conditions
        </h1>
        <p className="text-center text-lg md:text-xl leading-relaxed mb-10 text-gray-200">
          By accessing and using this website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
        </p>

        {/* Terms and Conditions Sections */}
        <div className="space-y-8 text-justify text-gray-400">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">1. Introduction</h2>
            <p>
              These terms and conditions govern your use of this website. By accessing and browsing this site, you agree to these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">2. Intellectual Property</h2>
            <p>
              All content on this website, including but not limited to text, images, graphics, and logos, is protected by intellectual property laws and is the property of the website owner.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">3. User Responsibilities</h2>
            <p>
              You agree to use this website only for lawful purposes. Any action that disrupts or damages the website or infringes on the rights of others is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">4. Limitation of Liability</h2>
            <p>
              The website owner is not liable for any damages or losses arising from your use of this website or reliance on its content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-2">5. Modifications</h2>
            <p>
              The website reserves the right to update or modify these terms and conditions at any time without prior notice.
            </p>
          </section>
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-8">
          <a
            href="/contact"
            className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-lg rounded-lg shadow-md transition-all duration-300"
          >
            Contact Us for More Info
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCo;
