// Certifications.js

import React from 'react';
import '../styles/CertificationsPage.css'; // Add your CSS file for styling
import Navbar from './Navbar';

const Certifications = () => {
  return (
    <div className="certifications-container">
        <Navbar/>
      <div className="certification-content">
        <h1>Certification Title 1</h1>
        <p>
          This is a brief description of Certification 1. You can add more details here.
        </p>
      </div>

      <div className="certification-content">
        <h1>Certification Title 2</h1>
        <p>
          This is a brief description of Certification 2. You can add more details here.
        </p>
      </div>

      <div className="certification-content">
        <h1>Certification Title 3</h1>
        <p>
          This is a brief description of Certification 3. You can add more details here.
        </p>
      </div>
    </div>
  );
};

export default Certifications;
