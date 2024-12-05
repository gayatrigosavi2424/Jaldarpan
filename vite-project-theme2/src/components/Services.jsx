import React from 'react';
import '../styles.css';

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="service-cen">
                {/* <h3>Services</h3> */}
                <h1>What We Provide</h1>
            </div>
            <div className="feature-box">
                <div className="feature">
                    <div className="feature-img">
                        <img src="/photos/logo3.jpg" alt="Service 1" />
                    </div>
                    <div className="feature-text">
                        <h3>Tailored Models for Accurate Data Insights</h3>
                        <p>
                            We create custom models for each location to ensure the data is highly accurate and relevant.
                            By adapting analysis to specific conditions, we provide precise insights for better management.
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-img">
                        <img src="/photos/logo1.jpg" alt="Service 2" />
                    </div>
                    <div className="feature-text">
                        <h3>Automated Alerts and Notifications</h3>
                        <p>
                            The system sends alerts to officers and vendors when critical issues are detected,
                            ensuring continuous monitoring of groundwater resources.
                        </p>
                    </div>
                </div>

                <div className="feature">
                    <div className="feature-img">
                        <img src="/photos/logo2.png" alt="Service 3" />
                    </div>
                    <div className="feature-text">
                        <h3>Issue Tracking and Resolution System</h3>
                        <p>
                            A dedicated portal for managing issues ensures transparency and accountability with
                            unique IDs assigned to each problem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
