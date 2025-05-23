import React from 'react';
import textLogo from '../assets/text_logo.svg';

export default function Navbar() {
  return (
    <nav className="w-full h-20 relative flex justify-between items-center px-10 bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] font-['Inter']">
      {/* Left: Logo */}
      <div className="w-32 h-9 relative">
        
        {/* TASK: INCREASE LOGO SIZE */}
        <img src={textLogo} alt="Focus3D Logo" className="h-full w-auto" />
      </div>

      {/* Center: Navigation Links */}
      <div className="flex gap-16 items-center text-white text-base font-normal uppercase tracking-wide leading-normal">
        <a
          href="#"
          className="underline text-shadow shadow-black"
          style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
        >
          Home
        </a>

        <div className="relative flex items-center underline">
          <span>Products</span>
          <span className="ml-2 w-3.5 h-2 transform -rotate-45 border-l border-b border-white" />
        </div>

        <a href="#" className="underline">
          About Us
        </a>
      </div>

      {/* Right: Waitlist Button */}
      <div className="relative pl-7 pr-2 py-px inline-flex items-center text-white text-base font-normal uppercase tracking-wide">
        <div className="absolute left-0 top-[5px] w-4 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-lg" />
        <span className="underline">Waitlist</span>
      </div>
    </nav>
  );
}
