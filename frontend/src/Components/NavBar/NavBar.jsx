import React from 'react'
import './NavBar.css';

const NavBar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">BookIt</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/books">Books</a></li>
        <li><a href="/categories">Categories</a></li>
        <li><a href="/contact">Contact Us</a></li>
      </ul>
      <div className="navbar-buttons">
        <button className="btn login-btn">Login</button>
        <button className="btn signup-btn">Sign Up</button>
      </div>
    </nav>
    </div>
  )
}

export default NavBar