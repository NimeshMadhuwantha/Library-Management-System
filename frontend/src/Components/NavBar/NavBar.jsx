import React, { useState } from 'react';
import './NavBar.css';
import { FaBars, FaTimes } from 'react-icons/fa'; 

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">BookIt</div>
        <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/books">Books</a></li>
          <li><a href="/categories">Categories</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <div className="navbar-close-icon" onClick={toggleMenu}>
            <FaTimes /> 
          </div>
        </ul>
        <div className="navbar-buttons">
          <button className="btn login-btn">Login</button>
          <button className="btn signup-btn">Sign Up</button>
        </div>
        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <FaBars /> 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
