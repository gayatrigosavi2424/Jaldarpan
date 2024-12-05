import React from 'react';
import '../styles.css';
import About from './About';
import Description from './Description';

const Home = () => {
    return (
        <>
        <section className="home" id="home">
            <img src="/photos/bg.jpg" alt="Background" />
            <div className="text">
                <div className="hero-title">
                    <h1>Jaldarpan</h1>
                </div>
                <div className="hero-sub-title">
                    <h3> Real-Time Insights and Alerts</h3>
                </div>
               
            </div>
        </section>
        <Description />
        <About />
        </>
    );
};

export default Home;



