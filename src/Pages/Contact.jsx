import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    website: "",
    service: "",
  });

  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "https://your-backend-url.com/send-query";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponse("Your message has been sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          company: "",
          website: "",
          service: "",
        });
      } else {
        setResponse("Failed to send your message. Please try again.");
      }
    } catch (error) {
      setResponse("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-6xl  shadow-lg rounded-lg p-10 flex flex-col md:flex-row bg-[#00000056]">
        {/* Left - Contact Form */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Feel free to contact us anytime. We will get back to you as soon as
            we can!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                required
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Website"
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <div>
              <input
                type="text"
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                placeholder="Service"
                className="w-full p-3 border border-gray-300 rounded bg-[#0000003a] text-white"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 borderborder-[#4d4d4d80]"
            >
              Submit
            </button>
          </form>
          {response && (
            <p className="mt-4 text-sm font-medium text-green-600">
              {response}
            </p>
          )}
        </div>

        {/* Right - Contact Info */}
        <div className="flex-1 p-10 rounded-lg mt-10 md:mt-0 md:ml-10">
          <h2 className="text-2xl font-bold mb-4">Contact Info</h2>
          <div className="space-y-4 text-white">
            <p>
              <strong>Phone:</strong> +91 788-940-2820
            </p>
            <p>
              <strong>Email:</strong> support@webinvolve.com
            </p>
            <p>
              <strong>Address:</strong> 190012 Shaltang Main Chowk HMT Srinagar,
              Kashmir.
            </p>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-blue-500">
              Facebook
            </a>
            <a href="#" className="text-blue-500">
              Instagram
            </a>
            <a href="#" className="text-blue-500">
              Twitter
            </a>
            <a href="#" className="text-blue-500">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
