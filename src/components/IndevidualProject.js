
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../projectData/projectData.js';



const IndevidualProject = () => {

 
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === parseInt(id, 10));
  
 
  if (!project) {
    return <div>Project not found</div>;
  }

  console.log("sdugfuosdygf",project);
  return (
    <div >
     <h1 style={{ color: 'yellow' }}>{project.title}</h1>
   </div>

  

  );
};

export default IndevidualProject;
