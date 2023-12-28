// src/App.js

import React from 'react';
// Correct import statement for Switch
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import Certifications from './components/Certifications.js';




const App = () => {
  return (
   
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/certifications" element={<Certifications/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
   
  
  );
};

export default App;
