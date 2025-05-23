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
      {/* Background decorative elements with fixed positioning */}


      <TopBar className="z-20 relative" />

      <main className="flex-1 bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] z-10 relative bg-opacity-90">
        <section id="hero" className="scroll-mt-16">
          <HeroPage />
        </section>
        <section id="about" className="scroll-mt-16">
          <AboutUs />
        </section>
        <section id="features" className="scroll-mt-16">
          <Filler />
        </section>
        <section id="contact" className="scroll-mt-16">
          <ContactUs />
        </section>
      </main>

      <Footer className="z-10 relative" />
    </div>
  );
}
