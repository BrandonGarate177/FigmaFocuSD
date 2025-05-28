import React from 'react';
import LightBulbLogo from '../assets/LightBulbLogo.svg';

export default function Filler() {
  return (
    <div className="w-full font-inter text-white flex flex-col sm:flex-row py-8 sm:py-16">
      {/* Left Visuals - SVG Art */}
      <div className="w-full sm:w-1/2 flex justify-center items-center px-4 sm:px-6">
        <img
          src={LightBulbLogo}
          alt="Decorative SVG Blocks"
          className="w-[280px] xs:w-[320px] sm:w-[380px] md:w-[450px] lg:w-[530px] h-auto object-contain transition-all duration-300"
        />
      </div>

      {/* Right Content */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center items-start px-4 sm:px-6 gap-6 sm:gap-8">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight sm:leading-8 max-w-full sm:max-w-md">
          In a world of growing distractions, we created the ultimate Focus tool.
        </h2>

        <button className="group flex flex-col items-start gap-2 text-base sm:text-lg transition-all duration-300">
          <div className="flex items-center gap-4 group-hover:gap-5 transition-all duration-300">
            {/* Learn More Text */}
            <span className="font-normal leading-loose group-hover:underline transition-all duration-300">
              Learn more
            </span>

            {/* Gradient Arrow */}
            <span className="w-5 h-5 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 16 16"
              >
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="50%" stopColor="#60a5fa" />
                    <stop offset="100%" stopColor="#fb923c" />
                  </linearGradient>
                </defs>
                <path
                  d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 110-2h7.586L8.293 4.707a1 1 0 010-1.414z"
                  fill="url(#arrowGradient)"
                />
              </svg>
            </span>
          </div>

          {/* Gradient Line - under the text */}
          <span className="w-24 h-0.5 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 group-hover:w-32 transition-all duration-300" />
        </button>
      </div>
    </div>
  );
}
