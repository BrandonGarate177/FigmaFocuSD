import React from 'react';

export default function ContactUs() {
  return (
    <div className="w-full h-[768px] font-inter text-white flex items-center justify-center px-4">
      <div className="max-w-[1056px] w-full text-center space-y-10">
        {/* Title */}
        <h2 className="text-6xl font-medium leading-[78px]">Contact Us</h2>

        {/* Description */}
        <p className="text-lg text-neutral-200 leading-loose max-w-[624px] mx-auto">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can't wait to share with us!
        </p>

        {/* Button */}
        <button className="relative px-7 pt-4 pb-5 rounded-sm uppercase font-medium text-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-sm z-0" />
          <span className="relative z-10">Get In Touch</span>
        </button>
      </div>
    </div>
  );
}
