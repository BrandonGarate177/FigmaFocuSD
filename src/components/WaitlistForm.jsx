import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function WaitlistForm({ onClose }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  // Add console debug on mount
  useEffect(() => {
    console.log('WaitlistForm mounted');
    // Test Supabase connection
    const testConnection = async () => {
      try {
        const { data, error } = await supabase.from('Waitlist').select('count').limit(1);
        console.log('Supabase connection test:', error ? 'Failed' : 'Success', data);
      } catch (err) {
        console.error('Supabase connection error:', err);
      }
    };
    testConnection();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted with email:', email);
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }
    
    setStatus('loading');
    
    try {
      console.log('Attempting to insert into Supabase...');
      // Insert email to waitlist table
      const { data, error } = await supabase
        .from('Waitlist')
        .insert([{ email, created_at: new Date() }]);
        
      console.log('Supabase response:', { data, error });
        
      if (error) throw error;
      
      setStatus('success');
      setEmail('');
      setTimeout(() => {
        if (onClose) onClose();
      }, 2000);
    } catch (error) {
      console.error('Error adding to waitlist:', error);
      setStatus('error');
      setErrorMessage(
        error.code === '23505' 
          ? 'This email is already on our waitlist!'
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#1A1A1A] to-[#232336] p-8 rounded-2xl border border-white/10 shadow-2xl max-w-md w-full backdrop-blur-md">
      <h3 className="text-white text-xl font-medium mb-6 flex items-center">
        <span className="inline-block w-2 h-2 rounded-full bg-indigo-500 mr-2 animate-pulse"></span>
        Join Our Waitlist
      </h3>
      
      {status === 'success' ? (
        <div className="text-blue-400 mb-4 bg-white/5 p-6 rounded-2xl border border-blue-500/20">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="font-medium">Thanks for joining our waitlist!</p>
            <p className="text-sm text-white/70 mt-1">We'll be in touch soon.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-white text-sm mb-2 font-medium">Email Address</label>
            <div className="relative">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-[#2A2A3A] border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-200"
                disabled={status === 'loading'}
                required
              />
            </div>
          </div>
          
          {status === 'error' && (
            <div className="flex items-center bg-red-900/20 text-red-400 text-sm p-3 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {errorMessage}
            </div>
          )}
          
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full relative py-3 px-4 rounded-xl text-white font-medium tracking-wide transition-all duration-300 ${
              status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-indigo-500/20 hover:scale-[1.02]'
            }`}
          >
            {status !== 'loading' && (
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-blue-400 to-orange-300 rounded-xl z-0" />
            )}
            
            <span className="relative z-10">
              {status === 'loading' ? (
                <div className="flex items-center justify-center bg-gradient-to-br from-indigo-500/50 via-blue-400/50 to-orange-300/50 py-3 px-4 rounded-xl">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Adding...
                </div>
              ) : 'Join Waitlist'}
            </span>
          </button>
        </form>
      )}
    </div>
  );
}