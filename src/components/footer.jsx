import React from 'react';
import DocumentIcon from '../assets/document.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] border-t border-white/25 text-white font-inter px-4 sm:px-6 lg:px-40 py-6 pb-10 sm:py-12 sm:pb-16 lg:py-16 lg:pb-20 relative z-30">
      {/* Top Row: Logo + About + SVG */}
      <div className="flex flex-row justify-between items-center sm:items-start gap-4 sm:gap-6">
        {/* Left Text */}
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="uppercase tracking-wide text-sm sm:text-base lg:text-lg font-medium">FOCUSD</div>
          <div className="text-stone-300 text-xs sm:text-sm lg:text-base font-normal leading-relaxed">About Us</div>
        </div>

        {/* Right SVG Visual */}
        <img
          src={DocumentIcon}
          alt="Decorative Document Symbol"
          className="w-14 sm:w-18 lg:w-24 h-auto opacity-80"
        />
      </div>

      {/* Bottom Row: Legal */}
      <div className="mt-8 sm:mt-12 lg:mt-16 pb-4 text-stone-300 text-[10px] xs:text-xs sm:text-sm leading-relaxed">
        <div className="flex flex-row justify-between items-center gap-3 sm:gap-4">
          <div>Terms of Use & Privacy Policy</div>
          <div className="font-medium text-[10px] xs:text-xs sm:text-sm">©2025 FOCUSD All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}
