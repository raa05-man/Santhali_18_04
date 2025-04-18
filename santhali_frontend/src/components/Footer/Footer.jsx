
import React from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative w-full text-black font-[Hanken Grotesk] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_footer.png')", opacity:"1" }} // Place in public/
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Logo & Text */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="/nit_logo.png" // Place in public/
            alt="NIT Jamshedpur Logo"
            className="w-16 md:w-20 mb-2"
          />
          <div className="text-center md:text-left">
            <h2 className="text-base md:text-lg font-semibold">
              National Institute of Technology, Jamshedpur
            </h2>
            <p className="text-xs md:text-sm mt-1">
              Adityapur, Jamshedpur, Jharkhand 831014
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:space-x-5 text-xl">
          <a href="#" className="hover:text-gray-700 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-gray-700 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-gray-700 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-700 transition"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-gray-700 transition"><FaYoutube /></a>

          {/* Visitor block for small screens */}
          <div className="block md:hidden text-center pt-2">
            <div className="text-sm font-semibold">VISITORS</div>
            <div className="text-lg font-bold">668754</div>
          </div>
        </div>

        {/* Visitor block for desktop */}
        <div className="hidden md:block text-center">
          <div className="text-sm font-semibold">VISITORS</div>
          <div className="text-lg font-bold">668754</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
