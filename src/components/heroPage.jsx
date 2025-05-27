import React from 'react';

export default function HeroPage() {
  // Import the openWaitlist function via props
  return (
    <div className="w-full min-h-[600px] sm:min-h-[700px] lg:min-h-[810px] relative text-white font-inter flex items-center justify-center">
      {/* Content wrapper */}
      <div className="w-full max-w-[584px] px-4 sm:px-0 flex flex-col items-center gap-4 sm:gap-6 text-center">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-medium leading-tight sm:leading-[64px]">
          Stay FocuSD
        </h1>

        {/* Subtext */}
        <p className="w-full max-w-[360px] sm:max-w-[400px] text-base sm:text-lg text-neutral-200 font-medium leading-snug">
          A smart, AI-powered desk lamp that helps you… yes, YOU stay focused.
        </p>

        {/* Waitlist button - Added onClick handler */}
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('openWaitlist'))}
          className="relative px-5 sm:px-7 py-3 sm:pt-4 sm:pb-5 uppercase font-medium text-sm sm:text-lg rounded-xl transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-xl z-0" />
          <span className="relative z-10">Join Waitlist</span>
        </button>
      </div>
    </div>
  );
}
