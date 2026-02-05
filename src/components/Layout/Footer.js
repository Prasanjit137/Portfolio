import React, { memo } from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import './Footer.css';

const Footer = memo(() => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://wa.me/+917551071252" target="_blank" rel="noopener noreferrer"  className="social-link">
            <AiOutlineWhatsApp />
          </a>
          <a href="https://github.com/Prasanjit137" target="_blank" rel="noopener noreferrer" className="social-link">
            <AiOutlineGithub />
          </a>
          <a href="https://linkedin.com/in/prasanjit-sarkar" target="_blank" rel="noopener noreferrer" className="social-link">
            <AiOutlineLinkedin />
          </a>
          <a href="mailto:sprasanjit2023@gmail.com" className="social-link">
            <AiOutlineMail />
          </a>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-copyright">
          © {currentYear} Gen AI Developer Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
export default Footer;