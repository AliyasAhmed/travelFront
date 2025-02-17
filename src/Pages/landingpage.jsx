import React from "react";
import aiImage1 from "../assets/mindTripImage5.webp";
import aiImage2 from "../assets/betaLogo.png";
import { Navigate } from "react-router-dom";
import ThreeScene from "../Pages/eathPage";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import Heroali from "./heroali";

const Landingpage = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Heroali />
      <section className="py-2 ">
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl font-bold text-center mb-8 {DarkMode ? "text-black" : "text-white"}`}
          >
            Everything you need for your next adventure
          </h2>
          <div className="flex flex-col md:flex-row items-center md:items-start rounded-lg p-6 shadow-lg">
            {/* Left Side */}
            <div className="md:w-1/2 flex items-center justify-center text-center md:text-left px-6">
              <div className="">
                <h3 className="text-2xl font-semibold mb-4">
                  Photos, maps + reviews
                </h3>
                <p className=" md:block hidden leading-relaxed">
                  Don’t just read about a place; experience it. With vibrant
                  photos, interactive maps and reviews, you’ll feel like you’re
                  already there.
                </p>
              </div>
            </div>
            {/* Right Side */}
            <div
              className="md:w-1/2 flex justify-center mt-6 md:mt-0"
              onClick={Navigate("/userConvo")}
            >
              <img
                src={aiImage1}
                alt="Chat Assistance"
                className="rounded-lg shadow-md w-full md:w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-3  drop-shadow-2xl border">
        <div className="p-5">
          <h1 className="text-2xl md:text-4xl font-bold  text-center mb-14">
            <span>Organize it all in one place.</span>
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 md:mx-12">
            {[
              {
                title: "Hotels",
                description:
                  "Stay at the best hotels around the world for the best prices.",
              },
              {
                title: "Car Rental",
                description:
                  "Unlock deals on any type of wheels and hit the road.",
              },
              {
                title: "Flights",
                description:
                  "Get real-time airfares for anywhere you want to jet off to.",
              },
              {
                title: "Restaurants",
                description:
                  "Snag a coveted table at your favorite activities, then make memories.",
              },
              {
                title: "Activities",
                description:
                  "Made reservations for your favorite activities, then make memories.",
              },
              {
                title: "Insider's Perspective",
                description:
                  "Set an insider's perspective on any location or attraction.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border rounded-md drop-shadow-sm w-full sm:w-80 p-3 mx-auto"
              >
                <div className="">
                  <h3 className="font-bold">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12  drop-shadow-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold  text-center mb-8">
            Maizbaan-Beta Capabilities
          </h2>
          <p className=" text-center mb-8">
            Maizbaan-Beta achieves a significant breakthrough in inference speed
            over previous models. It tops the leaderboard among open-source
            models and rivals the most advanced closed-source models globally.
          </p>
          <div className="overflow-x-auto px-12">
            <table className="min-w-full border border-gray-50 ">
              <thead>
                <tr className="">
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl ">
                    Benchmark (Metric)
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Maizbaan V3
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Maizbaan V2.5
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Qwen2.5
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Llama3.1
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Claude-3.5
                  </th>
                  <th className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    GPT-4o
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Architecture
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    MoE
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    MoE
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Dense
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    Dense
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    # Activated Params
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    37B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    21B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    72B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    405B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    # Total Params
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    671B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    236B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    72B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    405B
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    -
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2  font-semibold"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    MMLU (EM)
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    88.5
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    80.6
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    85.3
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.6
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.3
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    87.2
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    MMLU-Redux (EM)
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    89.1
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    80.3
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    85.6
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    86.2
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.9
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.0
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    DROP (3-shot F1)
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl bg-gradient">
                    91.6
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    87.8
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    76.7
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.7
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    88.3
                  </td>
                  <td className="px-4 py-2 animate-pulse backdrop-blur-xl">
                    83.7
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className="h-[20rem]">
        <ThreeScene />
      </div>

      <footer className=" py-8 px-20 ">
        <div className="container mx-auto px-4 text-center md:text-left flex flex-col-reverse gap-8 md:flex-row justify-around">
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/webinvolvee"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-600"
            >
              <FaFacebookF className="text-white text-lg " />
            </a>
            <a
              href="https://www.instagram.com/webinvolve/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            >
              <FaInstagram className=" text-lg" />
            </a>
            <a
              href="https://x.com/webinvolve"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            >
              <FaTwitter className=" text-lg" />
            </a>
            <a
              href="https://in.linkedin.com/company/webinvolve"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
            >
              <FaLinkedin className=" text-lg" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 md:mt-0">
            <div className="hidden md:block">
              <h3 className=" font-semibold">Research</h3>
              <ul className="">
                <li>Maizbaan LLM</li>
                <li>Maizbaan Coder</li>
                <li>Maizbaan Math</li>
                <li>Maizbaan VL</li>
                <li>Maizbaan V2</li>
                <li>Maizbaan Coder V2</li>
                <li>Maizbaan V3</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold ">Product</h3>
              <ul className="">
                <li>Maizbaan App</li>
                <li>Maizbaan Chat</li>
                <li>Maizbaan Platform</li>
                <li>API Pricing</li>
                <li>Service Status</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold ">Legal & Safety</h3>
              <ul className="">
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Report Vulnerabilities</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="hidden md:block border border-gray-400 my-6" />

        {/* Copyright Section */}
        <div className="text-center  text-xs sm:text-sm mt-6">
          <p>© {year} WebInvolve Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Landingpage;
