import React from 'react';
import vector from '../assets/vector.svg';

export default function AboutUs() {
  return (
    <div className="w-full relative text-white font-inter bg-transparent px-4 sm:px-8 md:px-16 py-16 sm:py-24">
      {/* Decorative vector behind */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] md:w-[660px] h-auto overflow-hidden pointer-events-none -z-10">
        <img
          src={vector}
          alt="Decorative vector"
          className="w-full h-auto translate-y-[80px] translate-x-[20px] sm:translate-x-[80px] sm:translate-y-[110px]"
        />
      </div>

      {/* Content block */}
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-tight">
          About FocuSD
        </h2>
        <p className="text-sm sm:text-base md:text-xl text-neutral-200 leading-relaxed sm:leading-loose px-2 sm:px-0">
          If your focus slips, the lamp gives a gentle signal—like turning red—so you can get back on track before losing momentum.
          <br /><br />
          Our companion app includes an intelligent tutor and productivity coach to guide your sessions and help you build better study habits.
        </p>
      </div>
    </div>
  );
}
