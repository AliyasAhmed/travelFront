import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gradient-to-tr from-black via-black to-transparent text-gray-100 py-8 px-4 sm:px-8">
      {/* Links and Content */}
      <div className="md:flex justify-between gap-8 hidden">
        {/* Get Started Section */}
        <div>
          <ul className="flex flex-col text-left">
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
          <ul className="flex flex-col text-left">
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
          <ul className="flex flex-col text-left">
            <li className="font-bold mb-2">Support</li>
            <Link className="hover:underline cursor-pointer" to="/Contact">
              Contact Us
            </Link>
            <Link className="hover:underline cursor-pointer" to="/About">
              About
            </Link>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <ul className="flex flex-col text-left">
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

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          href="https://www.facebook.com/webinvolvee"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
        >
          <FaFacebookF className="text-white text-lg" />
        </a>
        <a
          href="https://www.instagram.com/webinvolve/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
        >
          <FaInstagram className="text-white text-lg" />
        </a>
        <a
          href="https://x.com/webinvolve"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
        >
          <FaTwitter className="text-white text-lg" />
        </a>
        <a
          href="https://in.linkedin.com/company/webinvolve"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
        >
          <FaLinkedin className="text-white text-lg" />
        </a>
      </div>

      {/* Divider */}
      <div className="hidden md:block border border-gray-800 my-6" />

      {/* Copyright Section */}
      <div className="text-center text-gray-400 text-xs sm:text-sm mt-6">
        <p>© {currentYear} WebInvolve Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;