import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-[#000] via-[#000] to-[#0000] text-gray-100 py-8 px-5 sm:px-10 ">
            {/* Divider */}
            <div className="border border-gray-800 my-4" />

            {/* Flex Section */}
            <div className="flex flex-col gap-8 md:flex-row justify-between text-sm sm:text-base">
                {/* Get Started Section */}
                <div>
                    <ul className="text-center md:text-left">
                        <li className="font-bold mb-2">Get Started</li>
                        <li className="hover:underline cursor-pointer">Plan a trip to Kashmir</li>
                        <li className="hover:underline cursor-pointer">Plan a trip to Srinagar</li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div>
                    <ul className="text-center md:text-left">
                        <li className="font-bold mb-2">Legal</li>
                        <li className="hover:underline cursor-pointer">Terms and Conditions</li>
                        <li className="hover:underline cursor-pointer">Privacy Policy</li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <ul className="text-center md:text-left">
                        <li className="font-bold mb-2">Support</li>
                        <li className="hover:underline cursor-pointer">Contact Us</li>
                        <li className="hover:underline cursor-pointer">About Us</li>
                    </ul>
                </div>

                {/* Services Section */}
                <div>
                    <ul className="text-center md:text-left">
                        <li className="font-bold mb-2">Services</li>
                        <li className="hover:underline cursor-pointer">AI Brochure</li>
                        <li className="hover:underline cursor-pointer">AI Package Creator</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border border-gray-800 my-4" />

            {/* Copyright Section */}
            <div className="text-center text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg">
                <p>© 2024 WebInvolve Inc. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
