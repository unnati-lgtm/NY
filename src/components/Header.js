import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <div className="logo">NY Studio</div>
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/portfolio" className="nav-link">Portfolio</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/clients">Clients</Link> {/* ✅ Corrected this line */}
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;
