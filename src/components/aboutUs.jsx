import React from 'react';
import vector from '../assets/vector.svg';

import blob1 from '../assets/blob1.png';
import blob2 from '../assets/blob2.png';

import lightRay1 from '../assets/lightRay1.svg';
import lightRay2 from '../assets/lightRay2.svg';
import lightRay3 from '../assets/lightRay3.svg';

export default function AboutUs() {
  return (
    <div className="w-full h-[614px] relative text-white font-inter">
      {/* Decorative elements positioned relative to the lamp */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
        {/* Blobs */}
        <img
          src={blob1}
          className="select-none absolute top-[-200px] right-[-200px] w-[1500px] h-[1200px] rotate-[-40deg] opacity-40"
          alt="Blob 1"
        />
        <img
          src={blob2}
          className="select-none absolute bottom-[-200px] left-[-100px] w-[1500px] h-[1400px] rotate-[20deg] opacity-40"
          alt="Blob 2"
        />

        {/* Light Rays - positioned to emanate from the lamp position */}
        <img
          src={lightRay1}
          className="absolute w-[1800px] h-[1400px] rotate-[30deg] opacity-40"
          style={{
            top: '-100px',
            right: '200px',
            transformOrigin: 'right top'
          }}
          alt="Light Ray 1"
        />
        <img
          src={lightRay2}
          className="absolute w-[1600px] h-[1000px] rotate-[60deg] opacity-40"
          style={{
            top: '0px',
            right: '250px',
            transformOrigin: 'right top'
          }}
          alt="Light Ray 2"
        />
        <img
          src={lightRay3}
          className="absolute w-[2000px] h-[1600px] rotate-[15deg] opacity-40"
          style={{
            top: '100px',
            right: '150px',
            transformOrigin: 'right center'
          }}
          alt="Light Ray 3"
        />
      </div>
            
      {/* Main Title */}
      <div className="absolute top-[208px] left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-16">
        <h2 className="text-6xl font-medium leading-[78px] text-center">About FocuSD</h2>
      </div>

      {/* Description */}
      <p className="absolute top-[334px] left-1/2 transform -translate-x-1/2 w-[612.4px] text-center text-neutral-200 text-xl leading-loose">
        If your focus slips, the lamp gives a gentle signal—like turning red—so you can get back on track before losing momentum.
        <br />
        <br />
        Our companion app includes an intelligent tutor and productivity coach to guide your sessions and help you build better study habits.
      </p>

      {/* Decorative Vector Image */}
      <div className="absolute top-[-110px] right-[0px] w-[659.76px] h-[719px] overflow-hidden pointer-events-none z-30">
        <img src={vector} alt="Decorative vector" className="w-96 h-auto absolute top-[110px] left-[100px]" />
      </div>
    </div>
  );
}
