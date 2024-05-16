import React, { useState, useEffect } from 'react';
import './Style.css';
import './Navbar.css';
import './Bootstrapmin.css';
import './Bootstrap-icons.css';
import './Glightboxmin.css';

const Navbar = () => {
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header id="header" className={`header d-flex align-items-center ${isScrolled ? 'sticked sticky-menu' : 'sticked'}`}>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <h1>Arambh<span>Technologies</span></h1>
        </a>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li className="dropdown">
              <a href="#"><span>Menu</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </li>
            <li><a href="#recent-posts">News</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
};

export default Navbar;

