import React from 'react';

export default function HeroPage() {
  return (
    <div className="w-full h-[600px] sm:h-[810px] relative text-white font-inter">
      {/* Remove or adjust the gradient fade at the bottom */}
      {/* The "from-neutral-900" is creating the black line */}
      {/* Remove this div completely: */}
      {/* <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-neutral-900 to-neutral-900/0" /> */}

      {/* Content wrapper */}
      <div
        className="
          absolute
          top-[20vh] sm:top-[30vh]
          left-1/2 transform -translate-x-1/2
          w-full max-w-[584px] px-4 sm:px-0
          flex flex-col items-center gap-4 sm:gap-6
        "
      >
        {/* Main headline */}
        <h1
          className="
            text-4xl         /* mobile headline */
            sm:text-7xl      /* original on sm+ */
            font-medium
            text-center
            leading-tight
            sm:leading-[64px]
          "
        >
          Stay FocuSD
        </h1>

        {/* Subtext */}
        <p
          className="
            w-full
            max-w-[360px]    /* narrower copy on mobile */
            sm:w-96          /* original on sm+ */
            text-center
            text-base        /* mobile copy */
            sm:text-lg       /* original on sm+ */
            text-neutral-200
            font-medium
            leading-snug
          "
        >
          A smart, AI-powered desk lamp that helps you… yes, YOU stay focused.
        </p>

        {/* Waitlist button */}
        <button
          className="
            relative
            px-5             /* mobile padding */
            sm:px-7          /* original on sm+ */
            py-3             /* mobile vertical */
            sm:pt-4 sm:pb-5
            uppercase
            font-medium
            text-sm          /* mobile text */
            sm:text-lg
            rounded-lg
          "
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-lg z-0" />
          <span className="relative z-10">Waitlist</span>
        </button>
      </div>
    </div>
  );
}
