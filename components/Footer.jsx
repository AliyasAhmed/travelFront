import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-tr from-[#000] via-[#000] to-[#0000] text-gray-100 py-8 px-5 sm:px-10  ">
      {/* Divider */}
      <div className="border border-gray-800 my-4" />

      {/* Flex Section */}
      <div className="flex flex-col gap-8 md:flex-row justify-between text-sm sm:text-base">
        {/* Get Started Section */}
        <div>
          <ul className="flex flex-col text-center md:text-left">
            <li className="font-bold mb-2">Get Started</li>
            <Link className="hover:underline cursor-pointer" to="/signup">
              Create an account
            </Link>
            <Link className="hover:underline cursor-pointer" to="/login">
              Login
            </Link>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <ul className="flex flex-col text-center md:text-left">
            <li className="font-bold mb-2">Legal</li>
            <Link className="hover:underline cursor-pointer" to="/TermsAndCo">
              Terms and Conditions
            </Link>
            <Link className="hover:underline cursor-pointer" to="/PrivacyPol">
              Privacy Policy
            </Link>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <ul className="flex flex-col text-center md:text-left">
            <li className="font-bold mb-2">Support</li>
            <Link className="hover:underline cursor-pointer" to="/Contact">
              Contact Us
            </Link>
            <Link className="hover:underline cursor-pointer" to="/About">
              About{" "}
            </Link>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <ul className="flex flex-col text-center md:text-left">
            <li className="font-bold mb-2">Services</li>
            <Link className="hover:underline cursor-pointer" to="/Brochure">
              AI Brochure
            </Link>
            <Link className="hover:underline cursor-pointer" to="/Team">
              Team
            </Link>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border border-gray-800 my-4" />

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
        <p>© {currentYear} WebInvolve Inc. All rights reserved.</p>{" "}
      </div>
    </footer>
  );
};

export default Footer;
