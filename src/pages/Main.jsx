import React from 'react';
import TopBar from '../components/topBar';
import HeroPage from '../components/heroPage.jsx';
import AboutUs from '../components/aboutUs.jsx';
import Filler from '../components/filler.jsx';
import ContactUs from '../components/contactUs.jsx';
import Footer from '../components/footer.jsx';

import blob1 from '../assets/blob1.png';
import blob2 from '../assets/blob2.png';

import lightRay1 from '../assets/lightRay1.svg';
import lightRay2 from '../assets/lightRay2.svg';
import lightRay3 from '../assets/lightRay3.svg';

export default function Main() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <TopBar className="z-20 relative" />

      <main className="container mx-auto px-4 sm:px-0 relative">
        {/* hide giant blobs on mobile */}
        <img src={blob1} className="hidden lg:block absolute top-[130vh] left-3/4 w-[150vw] -translate-x-1/2 opacity-100" />
        <img src={blob2} className="hidden lg:block absolute top-[-700px] left-3/4 w-[100vw] -translate-x-1/2 opacity-100" />

        <section id="hero" className="scroll-mt-16 z-10"><HeroPage /></section>

        <section id="about" className="relative scroll-mt-16 w-full overflow-visible z-30">
          <div className="absolute inset-0 pointer-events-none -z-10">
            <img src={lightRay1} className="hidden sm:block absolute top-[200px] left-[-260px] w-screen h-auto rotate-1" />
            <img src={lightRay2} className="hidden sm:block absolute top-[210px] left-[-400px] w-screen h-auto rotate-4" />
            <img src={lightRay3} className="hidden sm:block absolute top-[210px] left-[-80px] w-screen h-auto rotate-4" />
          </div>
          <AboutUs />
        </section>

        <section id="features" className="scroll-mt-16 z-10"><Filler /></section>
        <section id="contact" className="scroll-mt-16 z-10"><ContactUs /></section>
      </main>

      <Footer className="z-10 relative" />
    </div>
  );
}
