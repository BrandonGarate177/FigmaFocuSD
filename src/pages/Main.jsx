import React from 'react';
import TopBar from '../components/topBar';
import HeroPage from '../components/heroPage.jsx';
import AboutUs from '../components/aboutUs.jsx';
import Filler from '../components/filler.jsx';
import ContactUs from '../components/contactUs.jsx';
import Footer from '../components/footer.jsx';

import blob1 from '../assets/blob1.png';
import blob2 from '../assets/blob2.png';
import Group from '../assets/Group.svg';

export default function Main() {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <TopBar />

      <main className="flex-1 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <img
            src={blob1}
            className="absolute top-[130vh] left-1/2 sm:left-3/4 w-[150vw] -translate-x-1/2 opacity-40 sm:opacity-70 md:opacity-100"
            alt=""
          />
          <img
            src={blob2}
            className="absolute top-[-500px] sm:top-[-700px] left-1/2 sm:left-3/4 w-[120vw] sm:w-[100vw] -translate-x-1/2 opacity-40 sm:opacity-70 md:opacity-100"
          />
        </div>

        {/* GroupLamp SVG - combining lamp and light rays */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <img
            src={Group}
            className="absolute top-[500px] sm:top-[700px] md:top-[700px] lg:top-[600px] right-20 sm:right-8 md:right-12 lg:right-24 w-[90vw] sm:w-[80vw] md:w-[75vw] lg:w-[160vw] h-auto -mr-20"
            alt="Lamp with light rays"
            style={{
              transform: 'translate3d(0, 0, 0)',
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <section id="hero" className="scroll-mt-16">
            <HeroPage />
          </section>

          <section id="about" className="relative scroll-mt-16 w-full overflow-visible">
            <AboutUs />
          </section>

          <section id="features" className="scroll-mt-16 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
            <Filler />
          </section>

          <section id="contact" className="scroll-mt-16 mb-8 sm:mb-12 lg:mb-16">
            <ContactUs />
          </section>
        </div>
      </main>

      <div className="relative z-30">
        <Footer />
      </div>
    </div>
  );
}
