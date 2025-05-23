import React from 'react';
import DocumentIcon from '../assets/document.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] border-t border-white/25 text-white font-inter px-4 sm:px-10 lg:px-40 py-8 sm:py-12 lg:py-16">
      {/* Top Row: Logo + About + SVG */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-10">
        {/* Left Text */}
        <div className="flex flex-col gap-2">
          <div className="uppercase tracking-wide text-sm sm:text-base font-normal">Focusd</div>
          <div className="text-stone-300 text-xs sm:text-sm font-normal leading-snug">About Us</div>
        </div>

        {/* Right SVG Visual */}
        <img
          src={DocumentIcon}
          alt="Decorative Document Symbol"
          className="w-20 sm:w-24 h-auto opacity-80"
        />
      </div>

      {/* Bottom Row: Legal */}
      <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4 text-stone-300 text-xs sm:text-sm leading-tight">
        <div>Terms of Use & Privacy Policy</div>
        <div>©2025 FOCUSD All Rights Reserved</div>
      </div>
    </footer>
  );
}
