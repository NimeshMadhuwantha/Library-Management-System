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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/books">Books</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>

          <div className="navbar-small-screen-buttons">
          

          </div>

          <div className="navbar-close-icon" onClick={toggleMenu}>
            <FaTimes /> 
          </div>
        </ul>

        <div className="navbar-buttons">
        <a href="/LoginPage">
          <button className="btn login-btn">Login</button>

        </div>

        <div className="navbar-menu-icon" onClick={toggleMenu}>
          <FaBars /> 
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
