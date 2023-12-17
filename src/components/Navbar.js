// src/components/Navbar.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

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
    navigate('/certifications');
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
    
    <div className={`navbar ${navbarOpacity < 1 ? 'fixed' : ''}`} style={{ opacity: navbarOpacity }}>
      <div className="name-link" onClick={handleHomeClick}>
        Dhruv
      </div>
      <div className="nav-links">
        <button className="button-style" onClick={handleProjectsClick}>
          Projects
        </button>
        <button className="button-style" onClick={handleCertificationsClick}>
          Certifications
        </button>
      </div>
    </div>
  );
};

export default Navbar;
