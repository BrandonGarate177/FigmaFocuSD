import React from 'react';
import DocumentIcon from '../assets/document.svg';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] border-t border-white/25 text-white font-inter px-10 lg:px-40 py-16">
      {/* Top Row: Logo + About + SVG */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        {/* Left Text */}
        <div className="flex flex-col gap-2.5">
          <div className="uppercase tracking-wide text-base font-normal">Focusd</div>
          <div className="text-stone-300 text-sm font-normal leading-snug">About Us</div>
        </div>

        {/* Right SVG Visual */}
        <img
          src={DocumentIcon}
          alt="Decorative Document Symbol"
          className="w-24 h-auto opacity-80"
        />
      </div>

      {/* Bottom Row: Legal */}
      <div className="mt-16 flex flex-col lg:flex-row justify-between items-center gap-4 text-stone-300 text-sm leading-tight">
        <div>Terms of Use & Privacy Policy</div>
        <div>©2025 FOCUSD All Rights Reserved</div>
      </div>
    </footer>
  );
}
