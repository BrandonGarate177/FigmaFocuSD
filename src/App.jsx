import React, { useEffect } from 'react';
import './index.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main.jsx';

const App = () => {
  useEffect(() => {
    console.log('App rendered');
    // Check if there are any console errors
    const originalError = console.error;
    console.error = (...args) => {
      console.log('Error detected:', ...args);
      originalError(...args);
    };
    
    return () => {
      console.error = originalError;
    };
  }, []);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;