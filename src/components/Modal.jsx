import React, { useEffect } from 'react';

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    // Prevent scrolling when modal is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    // Clean up
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-lg" onClick={onClose}>
      <div 
        className="animate-fade-in w-full max-w-md transform transition-all duration-300 ease-in-out scale-100 opacity-100" 
        style={{
          boxShadow: '0 0 40px rgba(124, 58, 237, 0.15)'
        }}
        onClick={e => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}