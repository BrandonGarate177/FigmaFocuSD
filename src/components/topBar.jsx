import React, { useState, useEffect } from 'react';
import documentIcon from '../assets/document.svg';
import Modal from './Modal';
import WaitlistForm from './WaitlistForm';

export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Listen for scroll events to handle visibility and styling
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine if we're scrolling up or down
      const isScrollingDown = currentScrollPos > prevScrollPos;
      
      // Add some threshold to prevent the navbar from flickering
      const scrollDelta = Math.abs(currentScrollPos - prevScrollPos);
      const threshold = 10;
      
      // Update visibility based on scroll direction (only if we moved enough)
      if (scrollDelta > threshold) {
        // Hide when scrolling down and show when scrolling up
        setVisible(!isScrollingDown || currentScrollPos < 50);
      }
      
      // Update the scrolled state for styling
      setScrolled(currentScrollPos > 10);
      
      // Remember current position for next comparison
      setPrevScrollPos(currentScrollPos);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Listen for openWaitlist events from other components
  useEffect(() => {
    const handleOpenWaitlist = () => {
      setIsWaitlistOpen(true);
    };

    window.addEventListener('openWaitlist', handleOpenWaitlist);
    
    return () => {
      window.removeEventListener('openWaitlist', handleOpenWaitlist);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    // Add a small delay to ensure DOM is ready
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the actual height of the header for accurate offset
        const headerHeight = document.querySelector('nav')?.offsetHeight || 64;
        
        // Get element's position relative to viewport
        const elementPosition = element.getBoundingClientRect().top;
        // Get scrolled position
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        // Scroll to the element
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }, 100);
  };

  const openWaitlist = () => {
    console.log('Opening waitlist modal');
    setIsWaitlistOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`w-full bg-gradient-to-r from-[#1A1A1A] to-[#1F1F2B] font-inter fixed top-0 left-0 right-0 z-40 transition-all duration-300 transform ${
          scrolled ? 'shadow-lg shadow-black/25 backdrop-blur-md bg-opacity-90' : ''
        } ${
          visible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex justify-between items-center px-4 sm:px-10 py-4 sm:py-0 h-auto sm:h-16">
          {/* Logo */}
          <div className="w-28 h-8 sm:w-32 sm:h-9">
            <img src={documentIcon} alt="FocusD Logo" className="h-full w-auto object-contain" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden sm:flex gap-8 lg:gap-16 items-center text-white text-sm sm:text-base font-normal uppercase tracking-wide">
            <button onClick={() => scrollToSection('hero')} className="hover:underline">Home</button>
            <div className="relative flex items-center cursor-pointer">
              <span>Products</span>
              <span className="ml-2 w-3.5 h-2 transform -rotate-45 border-l border-b border-white" />
            </div>
            <button onClick={() => scrollToSection('about')} className="hover:underline">About Us</button>
            <button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="sm:hidden text-white uppercase text-sm tracking-wide z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? 'Close' : 'Menu'}
          </button>

          {/* Waitlist */}
          <button 
            onClick={openWaitlist}
            className="hidden sm:flex relative pl-7 pr-2 py-px items-center text-white text-sm sm:text-base uppercase tracking-wide"
          >
            <div className="absolute left-0 top-[5px] w-4 h-4 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-xl" />
            <span className="underline cursor-pointer">Waitlist</span>
          </button>
        </div>

        {/* Mobile Menu - Redesigned */}
        {isMobileMenuOpen && (
          <div className="sm:hidden fixed top-16 right-4 w-48 backdrop-blur-lg bg-[#1A1A1A]/90 rounded-lg shadow-lg">
            <div className="flex flex-col py-4 px-6 text-white uppercase text-sm tracking-wide">
              <button onClick={() => scrollToSection('hero')} className="text-right py-3 hover:text-blue-400">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-right py-3 hover:text-blue-400">About Us</button>
              <button onClick={() => scrollToSection('features')} className="text-right py-3 hover:text-blue-400">Features</button>
              <button onClick={() => scrollToSection('contact')} className="text-right py-3 hover:text-blue-400">Contact</button>
              <div className="pt-3 mt-2 border-t border-white/10">
                <button onClick={openWaitlist} className="w-full text-right underline cursor-pointer hover:text-blue-400">Waitlist</button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Empty spacer to prevent content from hiding under the fixed navbar */}
      <div className="h-16 sm:h-16"></div>

      {/* Waitlist Modal - Add debugging info */}
      {isWaitlistOpen && (
        <Modal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)}>
          <WaitlistForm onClose={() => setIsWaitlistOpen(false)} />
        </Modal>
      )}
    </>
  );
}
