
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projectData/projectData.js';
import '../styles/IndevidualProject.css';
import Navbar from './Navbar.js';
import Slider from './Slider.js'
import { Link } from 'react-router-dom';

const IndevidualProject = () => {

  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id, 10));
  
  
  if (!project) {
    return <div>Project not found</div>;
  }


  const displaySkills= project.projectSkills.map((item)=>{
    return <li>{item}</li>
  })
  
  return (
    <div >
     <Navbar/> 
     <div className="sectionOne">
       <div className="SubContainerSOne">
        <h1>{project.title}</h1>

          <h2>
          {project.description}
          </h2>
       </div>
     </div>

     <div className="SectionTwo" style={{backgroundColor:`${project.bgColor}`}}>
       <div className="ImageTitle">
        <h2 >Project Glimpse</h2>
       </div>
        <Slider projectImages={project.projectImages} bg={project.bgColor}/>
     
     </div>

     <div className="SectionThree">
       <h1>
        Skills Used 
       </h1>
        <ul>
         {displaySkills}
        </ul>

        <div className="ButtonExplore">
          <Link to={project.projectGithubLink}>
          <button >
            Continue on GitHub
           </button>
        </Link>
        </div>


     </div>
   </div>

  

  );
};

export default IndevidualProject;
