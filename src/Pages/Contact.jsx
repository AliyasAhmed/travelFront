import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className=" flex justify-center relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage: "url(https://your-image-url.com)", // Replace with your own image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6">
          We'd love to hear from you! Please reach out for any inquiries or
          support requests.
        </p>

        {/* Contact Information Section */}
        <div className="space-y-4">
          <div>
            <strong>Email:</strong> <span>contact@example.com</span>
          </div>
          <div>
            <strong>Phone:</strong> <span>(123) 456-7890</span>
          </div>
          <div>
            <strong>Address:</strong>{" "}
            <span>1234 Street Name, City, Country</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
