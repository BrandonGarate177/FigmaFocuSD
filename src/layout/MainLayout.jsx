import React from 'react';
import IndexComponent from '../components/index';
import AboutComponent from '../pages/About';
const MainLayout = ({ children }) => {
    return (
        <div style={{ 
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column' 
        }}>
            <IndexComponent />
            <AboutComponent />
            <main style={{ flex: 1 }}>{children}</main>
        </div>
    );
};

export default MainLayout;