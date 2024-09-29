import React from 'react'
import './Footer.css';
import { FaWhatsapp, FaYoutube, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer-content'>
        <footer className="footer-container">
      <div className="footer-top">
        <p>Stay connected with us</p>
        <div className="social-links">
          <a href="https://wa.me/yourwhatsapplink" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="social-icon" />
          </a>
          <a href="https://www.youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="social-icon" />
          </a>
          <a href="https://twitter.com/yourtwitterhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="social-icon" />
          </a>
          <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="mailto:yourmail@example.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>

      <div className="footer-about">
        <h2>About BookIt Library</h2>
        <p>
          BookIt is your ultimate destination for exploring the vast world of books. From fiction to science,
          history to biographies, we offer a diverse range of genres to fuel your passion for reading.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer