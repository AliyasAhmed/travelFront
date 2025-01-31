// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-gradient-to-tr from-[#000] via-[#000] to-[#0000] text-gray-100 py-8 px-5 sm:px-10">
//       {/* Divider */}
//       <div className="border border-gray-800 my-4" />

//       {/* Flex Section */}
//       <div className="flex flex-col gap-8 md:flex-row justify-between text-sm sm:text-base">
//         {/* Get Started Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Get Started</li>
//             <Link className="hover:underline cursor-pointer" to="/signup">
//               Create an account
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/login">
//               Login
//             </Link>
//           </ul>
//         </div>

//         {/* Legal Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Legal</li>
//             <Link className="hover:underline cursor-pointer" to="/TermsAndCo">
//               Terms and Conditions
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/PrivacyPol">
//               Privacy Policy
//             </Link>
//           </ul>
//         </div>

//         {/* Support Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Support</li>
//             <Link className="hover:underline cursor-pointer" to="/Contact">
//               Contact Us
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/About">
//               About
//             </Link>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Services</li>
//             <Link className="hover:underline cursor-pointer" to="/Brochure">
//               AI Brochure
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/Team">
//               Team
//             </Link>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
//         <div className="flex gap-4 mb-4 w-full justify-center sm:w-auto">
//           <a
//             href="https://www.facebook.com/webinvolvee"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaFacebookF className="text-white text-lg" />
//           </a>
//           <a
//             href="https://www.instagram.com/webinvolve/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaInstagram className="text-white text-lg" />
//           </a>
//         </div>
//         <div className="flex gap-4 w-full justify-center sm:w-auto">
//           <a
//             href="https://x.com/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaTwitter className="text-white text-lg" />
//           </a>
//           <a
//             href="https://in.linkedin.com/company/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaLinkedin className="text-white text-lg" />
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border border-gray-800 my-4" />

//       {/* Copyright Section */}
//       <div className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
//         <p>© {currentYear} WebInvolve Inc. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-gradient-to-tr from-[#000] via-[#000] to-[#0000] text-gray-100 py-8 px-5 sm:px-10">
//       {/* Divider */}
//       <div className="border border-gray-800 my-4" />

//       {/* Flex Section */}
//       <div className="flex flex-col gap-8 md:flex-row justify-between text-sm sm:text-base">
//         {/* Get Started Section - Hidden on mobile and md, visible on lg */}
//         <div className="hidden lg:block">
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Get Started</li>
//             <Link className="hover:underline cursor-pointer" to="/signup">
//               Create an account
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/login">
//               Login
//             </Link>
//           </ul>
//         </div>

//         {/* Legal Section - Visible on all screens */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             {/* <li className="font-bold mb-2">Legal</li> */}
//             <Link className="hover:underline cursor-pointer" to="/TermsAndCo">
//               Terms and Conditions
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/PrivacyPol">
//               Privacy Policy
//             </Link>
//           </ul>
          
//         </div>

//         {/* Support Section - Hidden on mobile, visible on md and lg */}
//         <div className="hidden md:block">
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Support</li>
//             <Link className="hover:underline cursor-pointer" to="/Contact">
//               Contact Us
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/About">
//               About
//             </Link>
//           </ul>
//         </div>

//         {/* Services Section - Hidden on mobile and md, visible on lg */}
//         <div className="hidden lg:block">
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Services</li>
//             <Link className="hover:underline cursor-pointer" to="/Brochure">
//               AI Brochure
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/Team">
//               Team
//             </Link>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons */}
//       <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
//         <div className="flex gap-4 mb-4 w-full justify-center sm:w-auto">
//           <a
//             href="https://www.facebook.com/webinvolvee"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaFacebookF className="text-white text-lg" />
//           </a>
//           <a
//             href="https://www.instagram.com/webinvolve/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaInstagram className="text-white text-lg" />
//           </a>
//         </div>
//         <div className="flex gap-4 w-full justify-center sm:w-auto">
//           <a
//             href="https://x.com/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaTwitter className="text-white text-lg" />
//           </a>
//           <a
//             href="https://in.linkedin.com/company/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaLinkedin className="text-white text-lg" />
//           </a>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="border border-gray-800 my-4" />

//       {/* Copyright Section */}
//       <div className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
//         <p>© {currentYear} WebInvolve Inc. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;




// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();
//   return (
//     <footer className="bg-gradient-to-tr from-[#000] via-[#000] to-[#0000] text-gray-100 py-8 px-5 sm:px-10">
//       {/* Divider - Hidden on mobile, visible on md and larger screens */}
//       <div className="hidden md:block border border-gray-800 my-4" />

//       {/* Flex Section - Hidden on mobile, visible on md and larger screens */}
//       <div className="hidden md:flex flex-col gap-8 md:flex-row justify-between text-sm sm:text-base">
//         {/* Get Started Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Get Started</li>
//             <Link className="hover:underline cursor-pointer" to="/signup">
//               Create an account
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/login">
//               Login
//             </Link>
//           </ul>
//         </div>

//         {/* Legal Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Legal</li>
//             <Link className="hover:underline cursor-pointer" to="/TermsAndCo">
//               Terms and Conditions
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/PrivacyPol">
//               Privacy Policy
//             </Link>
//           </ul>
//         </div>

//         {/* Support Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Support</li>
//             <Link className="hover:underline cursor-pointer" to="/Contact">
//               Contact Us
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/About">
//               About
//             </Link>
//           </ul>
//         </div>

//         {/* Services Section */}
//         <div>
//           <ul className="flex flex-col text-center md:text-left">
//             <li className="font-bold mb-2">Services</li>
//             <Link className="hover:underline cursor-pointer" to="/Brochure">
//               AI Brochure
//             </Link>
//             <Link className="hover:underline cursor-pointer" to="/Team">
//               Team
//             </Link>
//           </ul>
//         </div>
//       </div>

//       {/* Social Media Icons - Always visible */}
//       <div className="flex justify-center items-center gap-4">
//         {/* <div className="flex gap-4 mb-4 w-full justify-center sm:w-auto"> */}
//           <a
//             href="https://www.facebook.com/webinvolvee"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaFacebookF className="text-white text-lg" />
//           </a>
//           <a
//             href="https://www.instagram.com/webinvolve/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaInstagram className="text-white text-lg" />
//           </a>
//         {/* </div> */}
//         {/* <div className="flex gap-4 w-full justify-center sm:w-auto"> */}
//           <a
//             href="https://x.com/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaTwitter className="text-white text-lg" />
//           </a>
//           <a
//             href="https://in.linkedin.com/company/webinvolve"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 bg-gray-800 rounded-full hover:bg-gray-600"
//           >
//             <FaLinkedin className="text-white text-lg" />
//           </a>
//         {/* </div> */}
//       </div>

//       {/* Divider - Hidden on mobile, visible on md and larger screens */}
//       <div className="hidden md:block border border-gray-800 my-4" />

//       {/* Copyright Section - Hidden on mobile, visible on md and larger screens */}
//       <div className="hidden md:block text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
//         <p>© {currentYear} WebInvolve Inc. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;










//chat gpt 
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
