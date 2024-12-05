import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        {/* Logo Section */}
        <div className="logo-sec">
          <img src="/photos/logo.png" alt="Logo" className="logo" />
          <h1 className="brand-name">JalDarpan</h1>
        </div>

        {/* Menu Section */}
        <div className={`menu-section ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/reading" onClick={toggleMenu}>Reading</Link>
          <Link to="/report" onClick={toggleMenu}>Report</Link>
          <Link to="/tutorial" onClick={toggleMenu}>Tutorial</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/alert" onClick={toggleMenu}>Alert</Link>
          <div className="auth-links">
            <Link to="/login" className="auth-link" onClick={toggleMenu}>
              <i className="bx bx-log-in"></i> Login
            </Link>
            <Link to="/signup" className="auth-link" onClick={toggleMenu}>
              <i className="bx bx-user-plus"></i> Signup
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`mobile-menu-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;