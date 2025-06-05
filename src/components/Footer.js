import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <h2>NY Studio</h2>
      <p>Location: Varanasi</p>
      <p>Email: <a href="mailto:Brothesrvideovivid@gmail.com">Brothesrvideovivid@gmail.com</a></p>
      <p>Phone: <a href="tel:+919277182420">+91 9277182420</a></p>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} NY Studio. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
