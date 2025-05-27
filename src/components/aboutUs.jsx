import React from 'react'
import vector from '../assets/vector.svg'

export default function AboutUs() {
  return (
    <div className="w-full relative text-white font-inter bg-transparent
                    px-4 sm:px-8 md:px-16 lg:px-32
                    py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Decorative vector behind on sm+ */}


      {/* Content block */}
      <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8
                      mb-12 sm:mb-16 md:mb-20">
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl
                       font-semibold leading-tight">
          About FocuSD
        </h2>
        <p className="text-base sm:text-lg md:text-xl
                       text-neutral-200 leading-relaxed sm:leading-loose">
          If your focus slips, the lamp gives a gentle signal—like turning red—so you can get back on track before losing momentum.
          <br /><br />
          Our companion app includes an intelligent tutor and productivity coach to guide your sessions and help you build better study habits.
        </p>
      </div>
    </div>
  )
}
