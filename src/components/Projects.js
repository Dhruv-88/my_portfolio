// Certifications.js

import React from 'react';
import '../styles/projects.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import FinancialReport from '../assets/financialreport.png';

const Project_Page = () => {
  
  const projects = [
    { id: 1, imageSource: FinancialReport, bgColor: '#AC9B8E',title:'First Project' },
    { id: 2, imageSource: FinancialReport, bgColor: '#E4E2E5',title:'Second Project' },

    
  ];

  return (
    <div className="certifications-container">
      <Navbar/>
      <div>
        <p className="Myworktext">My Work</p>
      </div>

      <div className="project-section">
      {projects.map((project) => (
        <div key={project.id} className="project-wrapper">
          
          <div className="project-container" style={{ backgroundColor: project.bgColor }}>
            <img src={project.imageSource} alt={`Project ${project.id}`} className="project-image" />
          </div>
          <h1 className="project-title">{project.title}</h1>
        </div>
      ))}
    </div>




    </div>
  );
};

export default Project_Page;
