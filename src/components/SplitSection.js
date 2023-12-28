// SplitSection.js
import React from 'react';
import '../styles/SplitSection.css'; // Import your styles
import Google from '../assets/google.svg';
import Microsoft from '../assets/microsoft.svg';

const SplitSection = () => {
  return (
    <div className="split-section">
      <LeftHalf />
      <RightHalf />
    </div>
  );
};

const LeftHalf = () => (
  <div className="left-half">
    <img className="image" src={Google} alt="Left Image" />
    <div>
      <h2>Google Analytics </h2>
      <p>Professional Certificate</p>
    </div>
  </div>
);

const RightHalf = () => (
  <div className="right-half">
    <img className="image" src={Microsoft} alt="Right Image" />
    <div>
      <h2>Microsoft Power BI Data Analyst</h2>
      <p>Professional Certificate</p>
    </div>
    
  </div>
);

export default SplitSection;
