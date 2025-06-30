import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">

      {/* Branding + Contact */}
      <div className="footer-column">
        <h2>NY Studio</h2>
        <p>Capturing emotions. Creating memories.</p>
        <p><strong>Location:</strong> Varanasi, Uttar Pradesh</p>
        <p><strong>Email:</strong> <a href="mailto:Brothesrvideovivid@gmail.com">Brothesrvideovivid@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+919277182420">+91 92771 82420</a></p>
      </div>

      {/* Quick Links */}
      <div className="footer-column">
        <h3>Quick Links</h3>
        <ul className="footer-links">
          <li><Link to="/">🏠 Home</Link></li>
          <li><Link to="/about">📸 About</Link></li>
          <li><Link to="/services">🛠 Services</Link></li>
          <li><Link to="/portfolio">🖼 Portfolio</Link></li>
          <li><Link to="/blog">📝 Blog</Link></li>
          <li><Link to="/contact">📞 Contact</Link></li>
        </ul>
      </div>

      {/* WhatsApp CTA */}
      <div className="footer-column">
        <h3>Let’s Talk</h3>
        <p>Have a project in mind?</p>
        <a 
          href="https://wa.me/919277182420" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="whatsapp-button"
        >
          💬 Chat on WhatsApp
        </a>
      </div>
    </div>

    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} NY Studio. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
