
import Earth from '../Pages/eathPage'
import React from "react";
const LandingPage = () => {
  return (
    <>
      <div>
        
        {/* star bg */}
        <div className="absolute min-h-screen w-full">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="relative stars  rounded-full bg-[#f8f8f8] shadow-[0px_2px_15px_2px_green] overflow-hidden"
              style={{
                top: `${Math.floor(Math.random() * 100)}vh`,
                left: `${Math.random() * 90}%`,
                height: `${Math.floor(Math.random() * 2 + 1)}px`,
                width: `${Math.floor(Math.random() * 2 + 1)}px`,
                animationDuration: `${Math.random() * 9 + 1}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      {/* maizbaan text */}
      <div className="flex justify-center items-start text-center bg-[#000000] h-[100vh] p-10">
        <div className="m-auto">
          <h1 className="text-[3rem] lg:text-[8rem] font-extrabold pb-10 text-white">
            {["M", "a", "i", "z", "b", "a", "a", "n", " ", "A", "I"].map(
              (char, index) => (
                <span
                  key={index}
                  className={`inline-block animate-blink ${
                    char === " " ? "mx-4" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {char}
                </span>
              )
            )}
          </h1>
          <p className="animate-pulse font-extrabold text-[2rem] text-gray-100">
            Your travel friendly AI
          </p>
          <div className='h-[80vh] w-[70vw] pb-[10rem] rounded-lg'>

          <Earth />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
