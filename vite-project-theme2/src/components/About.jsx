import React from 'react';
import '../styles.css';

const About = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-header">
                    <h1>Why Choose Us</h1>
                </div>
                <div className="about-cards">
                    <div className="about-card">
                        <div className="card-icon">
                            <i className="bx bx-shield-alt-2"></i>
                        </div>
                        <h3>Dedicated Issue Management Portal</h3>
                        <p>
                            Our platform goes beyond standard data collection by offering precision analysis and proactive
                            alerts, ensuring that no issue goes unnoticed. We streamline monitoring and troubleshooting,
                            reducing downtime and improving resource management efficiency.
                        </p>
                    </div>
                    <div className="about-card">
                        <div className="card-icon">
                            <i className="bx bx-user-check"></i>
                        </div>
                        <h3>User-Centric Design and Easy Navigation</h3>
                        <p>
                            Designed with simplicity and functionality in mind, our platform allows personnel to access,
                            interpret, and act on data quickly. Whether it's tracking issues or analyzing groundwater
                            trends, our user-friendly interface empowers you to manage tasks effortlessly.
                        </p>
                    </div>
                    <div className="about-card">
                        <div className="card-icon">
                            <i className="bx bx-code-alt"></i>
                        </div>
                        <h3>Comprehensive Support and Continuous Improvement</h3>
                        <p>
                            Our platform is backed by dedicated support and a commitment to continuous improvement. We
                            provide ongoing assistance and continuous training of models which help ensure that the system
                            evolves with your needs, enhancing functionality and addressing emerging challenges.
                        </p>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .about {
                    font-family: 'Nunito', sans-serif;
                    background: linear-gradient(135deg, #e0f2f1, #b2ebf2);
                    padding: 80px 0;
                    position: relative;
                }

                .about-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }

                .about-header {
                    text-align: center;
                    margin-bottom: 50px;
                }

                .about-header h1 {
                    font-size: 3rem;
                    font-weight: 700;
                    color: #00697d;
                }

                .about-cards {
                    display: flex;
                    justify-content: space-between;
                    gap: 30px;
                }

                .about-card {
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 15px;
                    padding: 30px;
                    box-shadow: 0 10px 30px rgba(0, 151, 230, 0.15);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    border: 2px solid transparent;
                    flex: 1;
                }

                .about-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 40px rgba(0, 151, 230, 0.2);
                    border-color: #00bcd4;
                }

                .card-icon {
                    font-size: 4rem;
                    margin-bottom: 20px;
                    color: #00bcd4;
                    text-align: center;
                }

                .about-card h3 {
                    color: #00697d;
                    margin-bottom: 15px;
                    font-size: 1.5rem;
                    text-align: center;
                }

                .about-card p {
                    color: #00838f;
                    line-height: 1.6;
                    text-align: center;
                }

                @media (max-width: 1024px) {
                    .about-cards {
                        flex-direction: column;
                    }
                }
            `}</style>
        </section>
    );
};

export default About;
