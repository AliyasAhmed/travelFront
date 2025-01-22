import React, { useEffect } from "react";
const Brochure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white backdrop-blur-sm"
      style={{
        backgroundImage: "url(https://your-image-url.com)", // Replace with your own image URL of Kashmir
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 p-10 md:p-20 text-center">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your AI Travel Buddy in Kashmir
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Explore the beauty of Kashmir with personalized travel
          recommendations, guided tours, and real-time assistance powered by AI.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Plan Your Trip
        </button>

        {/* Introduction */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">
            What is Travel Buddy AI?
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            Travel Buddy AI is your ultimate virtual assistant designed to
            enhance your trip to Kashmir. From finding the best tourist spots to
            booking hotels and providing real-time assistance, your AI guide is
            always here to help!
          </p>
        </div>

        {/* How It Works */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">
                Step 1: Input Your Preferences
              </h3>
              <p>
                Tell us about your interests—whether you're into adventure,
                nature, or cultural experiences.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">
                Step 2: Get Personalized Recommendations
              </h3>
              <p>
                Receive a custom itinerary with tourist attractions,
                restaurants, and hotel options tailored just for you.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">
                Step 3: Plan Your Trip
              </h3>
              <p>
                Choose your desired attractions and schedule your trip with ease
                using your AI travel companion.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-semibold mb-2">
                Step 4: Ask for Assistance Anytime
              </h3>
              <p>
                During your trip, your AI buddy is always available for
                last-minute recommendations and travel updates.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">
            Benefits of Travel Buddy AI
          </h2>
          <ul className="list-disc list-inside text-lg">
            <li>Personalized Travel Plans</li>
            <li>24/7 Assistance for Any Travel Queries</li>
            <li>Real-time Weather and Traffic Updates</li>
            <li>Explore Hidden Gems Off the Beaten Path</li>
          </ul>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-3xl font-semibold mb-4">What Our Tourists Say</h2>
          <blockquote className="italic mb-4">
            "Travel Buddy AI made our trip to Kashmir unforgettable! The AI
            provided us with amazing local recommendations and real-time
            updates."
            <br />— John & Sarah, USA
          </blockquote>
          <blockquote className="italic mb-4">
            "A must-have tool for anyone visiting Kashmir! It was like having a
            personal guide in my pocket."
            <br />— Ahmed, UAE
          </blockquote>
        </div>

        {/* Final CTA */}
        <div className="mt-16">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Start Your Kashmir Journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
