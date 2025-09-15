import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/">Contact Us</Link>
          <Link to="/">Terms of Service</Link>
          <Link to="/">FAQ</Link>
          {/* New link for publishers */}
          <Link to="/publisher/login">Publisher Login</Link>
        </div>
        <p className="footer-copyright">
          &copy; 2025 Kryptonauts. Made with ♥ for Indie Gamers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;