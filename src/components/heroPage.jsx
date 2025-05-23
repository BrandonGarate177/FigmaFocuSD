import React from 'react';

export default function HeroPage() {
  return (
    <div className="w-full h-[810px] relative text-white font-inter">
      {/* Remove or adjust the gradient fade at the bottom */}
      {/* The "from-neutral-900" is creating the black line */}
      {/* Remove this div completely: */}
      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-neutral-900 to-neutral-900/0" /> */}

      {/* Content wrapper */}
      <div className="absolute top-[159px] left-1/2 transform -translate-x-1/2 w-[584px] h-96 flex flex-col items-center gap-6">
        {/* Main headline */}
        <h1 className="text-7xl font-medium leading-[64px] text-center">
          Stay Focu<span className="text-blue-400">SD</span>
        </h1>

        {/* Subtext */}
        <p className="w-96 text-center text-lg font-medium uppercase leading-snug">
          A smart, AI-powered desk lamp that helps you... yes, YOU stay focused.
        </p>

        {/* Waitlist button */}
        <button className="relative px-7 pt-4 pb-5 uppercase font-medium text-lg rounded-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-sm z-0" />
          <span className="relative z-10">Waitlist</span>
        </button>
      </div>
    </div>
  );
}
