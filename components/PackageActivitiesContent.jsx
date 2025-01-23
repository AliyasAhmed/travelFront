
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import gsap from "gsap";

const PackageActivitiesContent = () => {
  // State for activities list
  const [activities, setActivities] = useState([]);

  // State for input value
  const [inputValue, setInputValue] = useState("");

  // GSAP animation for the section
  useEffect(() => {
    gsap.to(".activitiesSection", {
      y: 0,
      opacity: 1,
      duration: 1.5,
      delay: 0.1,
    });
  }, []);

  // Function to handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Function to add activity to the list
  const addActivity = () => {
    if (inputValue.trim() !== "") {
      setActivities((prevActivities) => [...prevActivities, inputValue.trim()]);
      setInputValue(""); // Clear input field
    }
  };

  // Function to remove an activity by index
  const removeActivity = (index) => {
    setActivities((prevActivities) =>
      prevActivities.filter((_, i) => i !== index)
    );
  };

  return (
    <section className="flex flex-col gap-3 justify-center items-center h-full activitiesSection -translate-y-[1000px]">
      {/* Heading Section */}
      <div className="flex flex-col md:flex-row lg:flex-row gap-4 justify-around items-center w-full">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A96F44] to-[#F2ECB6] p-2">
            Select your Activities
          </h1>
          <p className="text-gray-400 text-lg">
            Tell us about your trip. You can add more details later.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div>
          <div className="flex gap-4">
            <Link to="/packageAccomodation">
              <button className="bg-black border border-gray-600 rounded-lg w-full md:w-[150px] px-4 py-2 hover:bg-[#1e1e1e]">
                Previous
              </button>
            </Link>
            <Link to="/packagePdfGen">
              <button className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg w-full md:w-[150px] px-4 py-2 hover:opacity-90">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="p-4 bg-black m-5 rounded-lg md:min-w-[800px] lg:min-w-[900px]">
        <div className="flex flex-col gap-3">
          {/* Selected Activities */}
          <h1 className="font-bold text-lg">Selected Activities</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 my-2">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="p-2 text-center border border-gray-100 rounded-lg flex items-center justify-between gap-2"
              >
                <h1>{activity}</h1>
                <RxCross2
                  className="cursor-pointer text-red-500"
                  onClick={() => removeActivity(index)} // Remove activity on click
                />
              </div>
            ))}
          </div>

          {/* Input Field to Add Activities */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Type or search for activities"
              className="placeholder:font-bold p-3 rounded-lg w-full text-black"
              value={inputValue}
              onChange={handleInputChange}
              onKeyDown={(e) => e.key === "Enter" && addActivity()} // Add on Enter key press
            />
            <button
              onClick={addActivity}
              className="bg-gradient-to-r from-[#A96F44] to-[#cfc24c] text-white font-semibold rounded-lg px-4 hover:opacity-90"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageActivitiesContent;
