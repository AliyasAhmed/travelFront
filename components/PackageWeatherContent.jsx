
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineWbSunny } from "react-icons/md";

const PackageWeatherContent = () => {
  const weatherConditions = ['sunny', 'cloudy', 'rainy', 'snowy'];

  const [weatherValue, setWeatherValue] = useState('');
  const navigate = useNavigate();

  const goToImages = (event) => {
    event.preventDefault();
    // Add validation or navigation logic here
    if (weatherValue) {
      navigate('/packageImages'); // Adjust the path as needed
    } else {
      alert('Please select a weather condition');
    }
  };

  const saveInfo = (value) => {
    setWeatherValue(value);
  };

  return (
    <section className="w-full h-screen flex flex-col justify-center p-4 text-white">
      {/* Top Section */}
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Text Section */}
          <div className="text-center md:text-left">
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] text-2xl md:text-3xl lg:text-4xl font-bold">
              Weather of your destination
            </h1>
            <p className="text-gray-200 text-sm md:text-base mt-2">
              Tell us about your trip, you can add more details later.
            </p>
          </div>
          {/* Buttons Section */}
          <div className="flex gap-4">
            <Link to="/packageCreation">
              <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
                Previous
              </button>
            </Link>
            <button 
              className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90" 
              onClick={goToImages}
            >
              Next
            </button>
          </div>
        </div>

        {/* Weather Options */}
        <div className="bg-black rounded-lg p-6 shadow-md w-full md:w-3/4 lg:w-2/3 mx-auto">
          <h2 className="text-lg md:text-xl font-bold mb-4">What is the weather like?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {weatherConditions.map((value) => (
              <div 
                key={value}
                className={`border border-gray-600 p-4 rounded-lg text-center flex flex-col items-center gap-2 hover:bg-[#272727] cursor-pointer ${weatherValue === value ? 'bg-red-600' : ''}`}
                onClick={() => saveInfo(value)}
              >
                <MdOutlineWbSunny className="text-3xl text-[#F2ECB6]" />
                <p className="text-sm md:text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageWeatherContent;