
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import AboutMe from './components/AboutMe.js';
import IndevidualProject from './components/IndevidualProject.js';



const App = () => {
  
  return (
   
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/AboutMe" element={<AboutMe/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/IndevidualProject/:id" element={<IndevidualProject/>}/>
    </Routes>
   
  
  );
};

export default App;
