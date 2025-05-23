import React from 'react';
import Frame1 from '../assets/Frame1.svg';

export default function Filler() {
  return (
    <div className="w-full min-h-[732px] font-inter text-white flex flex-col lg:flex-row">
      {/* Left Visuals - SVG Art */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
        <img
          src={Frame1}
          alt="Decorative SVG Blocks"
          className="w-[530px] max-w-full h-auto object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 gap-8">
        <h2 className="text-xl lg:text-2xl font-bold leading-7 max-w-md">
          In a world of growing distractions, we created the ultimate Focus tool.
        </h2>

        <button className="group flex items-center gap-4">
          {/* Gradient Line */}
          <span className="w-24 h-0.5 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 group-hover:w-32 transition-all duration-300" />

          {/* Learn More Text */}
          <span className="text-lg font-normal leading-loose group-hover:underline">
            Learn more
          </span>

          {/* Gradient Arrow */}
          <span className="w-5 h-5 flex items-center justify-center">
            <div className="w-5 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 transform rotate-45" />
          </span>
        </button>
      </div>
    </div>
  );
}
