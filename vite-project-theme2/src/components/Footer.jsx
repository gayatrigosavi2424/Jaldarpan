import React from 'react';
import '../styles.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>
                        We provide innovative solutions for groundwater monitoring, ensuring sustainable water management for future generations.
                    </p>
                </div>
                <div className="footer-section">
                    <h4>Support</h4>
                    <ul>
                        <li><a href="/faqs">FAQs</a></li>
                        <li><a href="/docs">Documentation</a></li>
                        <li><a href="/api">API</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 Jaldarpan. All Rights Reserved.</p>
                <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
            </div>
        </footer>
    );
};

export default Footer;