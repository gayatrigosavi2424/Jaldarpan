import React, { useState } from 'react';
import '../styles.css';
import About from './About';
import Description from './Description';

const Home = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <>
            <section className="home" id="home">
                <img src="/photos/bg.jpg" alt="Background" />
                <div className="text">
                    <div className="hero-title">
                        <h1>Jaldarpan</h1>
                    </div>
                    <div className="hero-sub-title">
                        <h3>Real-Time Insights and Alerts</h3>
                    </div>
                </div>
            </section>
            <Description />
            <About />
            
            {/* Popup Section */}
            {isVisible && (
                <div style={styles.popupContainer}>
                    <div style={styles.popupContent}>
                        <button style={styles.closeButton} onClick={handleClose}>
                            ×
                        </button>
                        <h3>Welcome to Jaldarpan!</h3>
                        <p>Get real-time insights and alerts at your fingertips.</p>
                    </div>
                </div>
            )}
        </>
    );
};

const styles = {
    popupContainer: {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    popupContent: {
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        textAlign: 'center',
    },
    closeButton: {
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

export default Home;
