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

  const DAR = [

    { id: 2, imageSource: FinancialReport, bgColor: '#3A302E',title:'Second Project' },
    { id: 1, imageSource: FinancialReport, bgColor: '#CFC5B1',title:'First Project' }
  ];

  const ExcelProjects=[
    { id: 2, imageSource: FinancialReport, bgColor: '#7E693E',title:'Second Project' },
    { id: 1, imageSource: FinancialReport, bgColor: '#4D1C13',title:'First Project' }
  ]

  const ReactNAtive=[
    { id: 2, imageSource: FinancialReport, bgColor: '#626635',title:'Second Project' },
    { id: 1, imageSource: FinancialReport, bgColor: '#DEAE4D',title:'First Project' }
  ]
  return (
    <div className="certifications-container">
      <Navbar/>
      <div className="titleText">
        <p className="Myworktext">My Work</p>
      </div>
      <div className="projectHeading">
        <h1>
          BI Desktops
        </h1>
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

      {/* Data analysis */}
      <div className="projectHeading">
        <h1>
          Data analytic Reports
        </h1>
      </div>
      <div className="project-section">
        {DAR.map((project) => (
          <div key={project.id} className="project-wrapper">
            
            <div className="project-container" style={{ backgroundColor: project.bgColor }}>
              <img src={project.imageSource} alt={`Project ${project.id}`} className="project-image" />
            </div>
            <h1 className="project-title">{project.title}</h1>
          </div>
        ))}
      </div>

      {/* Excel Projects */}

      <div className="projectHeading">
        <h1>
         React Native projects
        </h1>
      </div>
      <div className="project-section">
        {ExcelProjects.map((project) => (
          <div key={project.id} className="project-wrapper">
            
            <div className="project-container" style={{ backgroundColor: project.bgColor }}>
              <img src={project.imageSource} alt={`Project ${project.id}`} className="project-image" />
            </div>
            <h1 className="project-title">{project.title}</h1>
          </div>
        ))}
      </div>

       {/* React NativeProjects */}

       <div className="projectHeading">
        <h1>
          Excel projects
        </h1>
      </div>
      <div className="project-section">
        {ReactNAtive.map((project) => (
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
