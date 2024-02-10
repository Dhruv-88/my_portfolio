// Certifications.js

import React from 'react';
import '../styles/AboutMe.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import ProfileImage from '../assets/profileimage.jpeg';
import Certi from '../assets/certifications.png';
import TimeLine from '../assets/Timeline.png';


const AboutMe = () => {
  return (
    <div className="certifications-container">
        <Navbar/>

        {/* section 1 */}
      <div className="Section1">
        <div className="Section1Left">
           <img src={ProfileImage}/>
        </div>
        <div className="Section1Right">
          <div>
              <h3 className="s1rsubcontainer" >
                Hello, I'm Dhruv Aspiring Data Analyst with a passion for the finance world. I'm Eager to leverage my data analytics skills to drive insights and informed decisions. Committed to continuous learning, I'm dedicated to staying at the forefront of new data analytics concepts and financial movements in the world .
              </h3>
          </div>
            
        </div>
      </div>

      {/* section 2 */}

      <div className="Section2">
        <div className="Section2Left">
            <div>
                <h3 className="s1rsubcontainer" >
                  I'm currently Masters student ,at Northeastern university,Toronto.Here I'm learning valueable insights of industry,sharping my skills and evelvoing my personal skills by adventuring new journey in 
                  Canada with rich diversity and very kind and humble people. Previously i have completed my Bacholr's Degree in computer science Engineering which fullfilled me with the technical knowledge as well as wonderful academic and personal experiences. I scored 9.7 GPA in my bachlors degree and currently pursuing my masters study with 3.89 GPA in masters.
                </h3>
            </div>
          </div>
          <div className="Section2Right">
          <img src={TimeLine}/>
              
          </div>
      </div>
     
     {/* section 3 */}
       {/* section 1 */}
       <div className="Section3">
          <div className="s3rsubcontainer" >
              <h3>
                I am equipped with the all the skills require for a data Analyst.I have recently passed  Microsft pl-300(powerbi certification) exam which honors me with the business Intelligence tools and technique.I'm googles certified data analyst which testify my knowledge for all the fundamental of data analyst prospect.
                Along with technical skills i'm active investor with overall 60% return on my 3 year's of investment journey.I also posses the skills of native mobile development using React native and web application development with react and java script. I have implement this skills by working on live industry projects as well freelancing task.
              </h3>
          </div>
        </div>
      

    </div>
  );
};

export default AboutMe;
