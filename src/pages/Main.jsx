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
import vector from '../assets/vector.svg';

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

        {/* Light rays - with detailed positioning control */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* LIGHT RAY 1: 
              Mobile position: Change top-[200px] and left-[-150px] values
              Desktop position: Change sm:top-[400px], md:top-[700px], lg:top-[800px] and sm:left-[-260px] values 
              Z-index control: Modify z-0 in parent div to change stacking order
          */}
          <img
            src={lightRay1}
            className="absolute top-[650px] sm:top-[800px] md:top-[700px] lg:top-[800px] left-[-65px] sm:left-[-250px] w-[200vw] sm:w-[120vw] h-auto rotate-2"
            alt=""
            style={{
              /* For more precise control, uncomment and modify these values:
              transform: 'translate3d(0, 0, 0) rotate(1deg)',
              zIndex: 1 
              */
            }}
          />
          
          {/* LIGHT RAY 2:
              Mobile position: Change top-[210px] and left-[-200px] values
              Desktop position: Change sm:top-[410px], md:top-[710px], lg:top-[810px] and sm:left-[-400px] values 
          */}
          <img
            src={lightRay2}
            className="absolute top-[755px] sm:top-[980px] md:top-[710px] lg:top-[1190px] left-[20px] sm:left-[30px] w-[150vw] sm:w-[120vw] h-auto rotate-20"
            alt=""
            style={{
              //  For more precise control, uncomment and modify these values:
              transform: 'translate3d(0, 0, 0) rotate(-40deg)',
              // zIndex: 2
              
            }}
          />
          
          {/* LIGHT RAY 3:
              Mobile position: Change top-[210px] and left-[-50px] values
              Desktop position: Change sm:top-[410px], md:top-[710px], lg:top-[810px] and sm:left-[-80px] values 
          */}
          <img
            src={lightRay3}
            className="absolute top-[655px] sm:top-[810px] md:top-[710px] lg:top-[810px] left-[-35px] sm:left-[-80px] w-[150vw] sm:w-[120vw] h-auto rotate-4"
            alt=""
            style={{
              /* For more precise control, uncomment and modify these values:
              transform: 'translate3d(0, 0, 0) rotate(4deg)',
              zIndex: 3
              */
            }}
          />
        </div>

        {/* Decorative lamp - with detailed positioning control */}
        {/* LAMP:
            Mobile position: Change top-[300px] and right-4 values
            Desktop position: Change sm:top-[400px], md:top-[500px], lg:top-[600px] and sm:right-8, md:right-12, lg:right-24 values
            Size control: Modify w-32, sm:w-60, md:w-80, lg:w-[660px] for responsive sizing
            Z-index: Change z-10 to control stacking
        */}
        <div className="absolute top-[600px] sm:top-[700px] md:top-[700px] lg:top-[600px] right-4 sm:right-8 md:right-12 lg:right-24 w-32 sm:w-60 md:w-80 lg:w-[500px] overflow-hidden pointer-events-none z-10">
          <img
            src={vector}
            alt="Decorative lamp"
            className="w-full h-auto object-contain translate-x-[0px] translate-y-[0px] sm:translate-x-[20px] sm:translate-y-[-10px] md:translate-x-[30px] md:translate-y-[-12px] lg:translate-x-[0px] lg:translate-y-[0px]"
            style={{
              /* Fine-tune lamp position with these offsets:
              transform: 'translate3d(8px, -4px, 0)',
              */
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
