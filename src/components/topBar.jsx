import React from 'react';
import document from '../assets/document.svg';

// ToDO: 
// Make the buttons useful

export default function Navbar() {
  return (
    <nav className="w-full h-auto sm:h-16 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-10 py-4 sm:py-0 bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] font-inter">
      {/* Logo */}
      <div className="w-28 h-8 sm:w-32 sm:h-9">
        <img src={document} alt="Focus3D Logo" className="h-full w-auto object-contain" />
      </div>

      {/* Nav links only on sm+ */}
      <div className="hidden sm:flex gap-8 lg:gap-16 items-center text-white text-sm sm:text-base font-normal uppercase tracking-wide">
        <a href="#hero" className="hover:underline">Home</a>
        <div className="relative flex items-center">
          <span>Products</span>
          <span className="ml-2 w-3.5 h-2 transform -rotate-45 border-l border-b border-white" />
        </div>
        <a href="#about" className="hover:underline">About Us</a>
      </div>

      {/* simple mobile menu button */}
      <button className="sm:hidden text-white">Menu</button>

      {/* Waitlist */}
      <div className="relative pl-7 pr-2 py-px inline-flex items-center text-white text-sm sm:text-base uppercase tracking-wide">
        <div className="absolute left-0 top-[5px] w-4 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-lg" />
        <span className="underline">Waitlist</span>
      </div>
    </nav>
  );
}
