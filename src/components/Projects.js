// Certifications.js

import React from 'react';
import '../styles/projects.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import projectsData from '../projectData/projectData.js';

const Project_Page = () => {
  const navigate = useNavigate();

  
  const BIprojects = projectsData.filter((project) => project.projectCategory === 'BIproject');
  const DAR = projectsData.filter((project) => project.projectCategory === 'DAR');
  const ExcelProjects = projectsData.filter((project) => project.projectCategory === 'Excel');
  const ReactNAtive = projectsData.filter((project) => project.projectCategory === 'APPLICATION');



  
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
        {BIprojects.map((project) => (
          <div key={project.id} className="project-wrapper">
            
            <div 
             className="project-container" 
             style={{ backgroundColor: project.bgColor }}
             onClick={
              ()=>{
                navigate(`/IndevidualProject/${project.id}`)
              }
             }
             >
              <img src={project.imageSource} 
                alt={`Project ${project.id}`} 
                className="project-image" 
              />
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
            
            <div className="project-container"
             style={{ backgroundColor: project.bgColor }}
             onClick={
              ()=>{
                navigate(`/IndevidualProject/${project.id}`)
              }
             }
             >
              <img src={project.imageSource} alt={`Project ${project.id}`} className="project-image" />
            </div>
            <h1 className="project-title">{project.title}</h1>
          </div>
        ))}
      </div>

      {/* Excel Projects */}
{/* 
      <div className="projectHeading">
        <h1>
         Excel Projects
        </h1>
      </div>
      <div className="project-section">
        {ExcelProjects.map((project) => (
          <div key={project.id} className="project-wrapper">
            
            <div className="project-container"
             style={{ backgroundColor: project.bgColor }}
             onClick={
              ()=>{
                navigate(`/IndevidualProject/${project.id}`)
              }
             }
             >
              <img src={project.imageSource} alt={`Project ${project.id}`} className="project-image" />
            </div>
            <h1 className="project-title">{project.title}</h1>
          </div>
        ))}
      </div> */}

       {/* React NativeProjects */}

       <div className="projectHeading">
        <h1>
          React Native Projects
        </h1>
      </div>
      <div className="project-section">
        {ReactNAtive.map((project) => (
          <div key={project.id} className="project-wrapper">
            
            <div className="project-container"
             style={{ backgroundColor: project.bgColor }}
             onClick={
              ()=>{
                navigate(`/IndevidualProject/${project.id}`)
              }
             }
             >
              <img src={project.imageSource}
               alt={`Project ${project.id}`}
               className="project-image"
              />
            </div>
            <h1 className="project-title">{project.title}</h1>
          </div>
        ))}
      </div>
    



    </div>
  );
};

export default Project_Page;
