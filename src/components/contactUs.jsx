import React from 'react';

export default function ContactUs() {
  const handleContact = () => {
    // Add contact functionality here
    window.open('mailto:contact@focusd.com', '_blank');
  };

  return (
    <div className="w-full font-inter text-white flex items-center justify-center px-4 py-12 sm:py-20">
      <div className="max-w-[1056px] w-full text-center space-y-6 sm:space-y-10">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-medium leading-tight lg:leading-[78px]">
          Contact Us
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-neutral-200 leading-relaxed sm:leading-loose max-w-[624px] mx-auto">
          We are always open to discuss new value-adding partnerships. Do reach out if you are an exchange or a project looking for liquidity; an algorithmic trader or a software developer looking to improve the markets with us or just have a great idea you can't wait to share with us!
        </p>

        {/* Button */}
        <button
          onClick={handleContact}
          className="relative px-6 sm:px-7 py-3 sm:pt-4 sm:pb-5 rounded-xl uppercase font-medium text-base sm:text-lg transition-transform hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-xl z-0" />
          <span className="relative z-10">Get In Touch</span>
        </button>
      </div>
    </div>
  );
}
