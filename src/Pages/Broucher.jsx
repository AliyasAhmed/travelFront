import React, { useEffect } from "react";

const Brochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url(https://your-image-url.com)", // Replace with your own Kashmir image URL
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 p-6 md:p-20 text-center space-y-16">
        {/* Hero Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Your AI Travel Buddy in Kashmir
          </h1>
          <p className="text-lg md:text-2xl max-w-3xl mx-auto">
            Discover the magic of Kashmir with personalized AI-powered travel
            recommendations, guided tours, and real-time assistance.
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Plan Your Trip
          </button>
        </div>

        {/* Introduction */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What is Travel Buddy AI?</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Travel Buddy AI is your personal travel assistant for exploring
            Kashmir. Get real-time guidance, hidden gems, and a stress-free
            travel experience.
          </p>
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "Step 1",
                title: "Input Your Preferences",
                description:
                  "Share your interests—be it adventure, nature, or culture.",
              },
              {
                step: "Step 2",
                title: "Get Recommendations",
                description:
                  "Receive tailored itineraries with top attractions, restaurants, and hotels.",
              },
              {
                step: "Step 3",
                title: "Plan Your Trip",
                description:
                  "Easily schedule and organize your trip using our AI tool.",
              },
              {
                step: "Step 4",
                title: "Ask Anytime",
                description:
                  "Your AI buddy provides instant help for any travel updates or queries.",
              },
            ].map(({ step, title, description }, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#31313142] text-white rounded-lg shadow-lg space-y-3"
              >
                <h3 className="text-lg font-bold">
                  {step}: {title}
                </h3>
                <p className="text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Benefits of Travel Buddy AI</h2>
          <ul className="space-y-3 max-w-xl mx-auto text-left">
            {[
              "Personalized travel plans tailored to your needs.",
              "24/7 assistance for all travel queries.",
              "Real-time weather and traffic updates.",
              "Discover hidden gems off the beaten path.",
            ].map((benefit, idx) => (
              <li key={idx} className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">✔</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">What Our Tourists Say</h2>
          <div className="space-y-4">
            {[
              {
                text: "Travel Buddy AI made our trip to Kashmir unforgettable! The AI provided us with amazing local recommendations and real-time updates.",
                author: "— John & Sarah, USA",
              },
              {
                text: "A must-have tool for anyone visiting Kashmir! It was like having a personal guide in my pocket.",
                author: "— Ahmed, UAE",
              },
            ].map(({ text, author }, idx) => (
              <blockquote
                key={idx}
                className="italic border-l-4 border-blue-500 pl-4"
              >
                <p>{text}</p>
                <span className="block mt-2 text-sm">{author}</span>
              </blockquote>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div>
          
            <a className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 transition-all" href="/contact">Start Your Kashmir Journey</a>
            
          
        </div>
      </div>
    </div>
  );
};

export default Brochure;
