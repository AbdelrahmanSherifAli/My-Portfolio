import React from 'react';
import './Footer.css';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-section'>
      <div className="footer-content">

        {/* Back to top section with decorative dots */}
        <div className="footer-back">
          <div className="footer-dots">...</div>
          <a href="#top" className="back-to-top">↑<br />BACK TO TOP</a>
        </div>

        {/* Social media icons with external links */}
        <div className="footer-socials">
          <a href="https://www.facebook.com/Abdelrahman.Sherif.Abas/" target="_blank" rel="noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/in/abdelrahman-sherif-648aa9276/" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/3bdelrahman_sherif/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>

        {/* Copyright text */}
        <div className="footer-copy">
          @2026 Abdelrhman Sherif All Rights Reserved.
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
