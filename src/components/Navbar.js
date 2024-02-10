// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import Logo from '../assets/Dhruvnew.svg';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/github.svg';
import navIcon3 from '../assets/nav-icon3.svg';
const Navbar = () => {
  const navigate = useNavigate();
  const [navbarOpacity, setNavbarOpacity] = useState(1);

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleCertificationsClick = () => {
    navigate('/AboutMe');
  };

  useEffect(() => {
    let previousScrollPosition = 0;
  
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 0.4;
  
      // Gradually reduce opacity until scrollPosition reaches 20% of the screen
      const opacity = Math.min(scrollPosition / maxScroll, 1);
  
      setNavbarOpacity(opacity);
  
      // Show the Navbar again if scrolling upwards
      if (scrollPosition < previousScrollPosition) {
        setNavbarOpacity(1);
      }
  
      previousScrollPosition = scrollPosition;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    
    <div className={`navbar ${navbarOpacity < 1 ? 'fixed' : ''}`} style={{ opacity: navbarOpacity,backgroundColor:'black',transition: 'opacity 0.10s ease-out' }}>
      <div className="name-link" onClick={handleHomeClick}>
        <img src={Logo}/>
      </div>
      <div className="nav-links">
      <div className="social-icon">
                                <a href="https://www.linkedin.com/in/dhruv-patel30/"><img src={navIcon1} alt="" /></a>
                                <a href="https://github.com/Dhruv-88"><img src={navIcon2} alt="" /></a>
       </div>
        <button className="button-style" onClick={handleProjectsClick}>
          Projects
        </button>
        <button className="button-style" onClick={handleCertificationsClick}>
          About Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
