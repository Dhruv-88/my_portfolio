// Certifications.js

import React from 'react';
import '../styles/AboutMe.css'; // Add your CSS file for styling
import Navbar from './Navbar';
import ProfileImage from '../assets/profileimage.jpeg';
import Certi from '../assets/certifications.png';
import TimeLine from '../assets/Timeline.png';
import PersonalImage1 from '../assets/personalImage_1.png';
import PersonalImage2 from '../assets/personalimage_2.jpg';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();
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
                  I'm a Master's student at Northeastern University, Toronto, where I'm gaining valuable industry insights and honing my skills while embracing Canada's rich diversity and the kindness of its people. With a Bachelor's degree in Computer Science Engineering, I attained a GPA of 9.7, and I'm currently pursuing my Master's with a GPA of 3.89.
                </h3>
            </div>
          </div>
          <div className="Section2Right">
          <img src={TimeLine}/>
              
          </div>
      </div>
     
     {/* section 3 */}
      
       <div className="Section3">
          <div className="s3rsubcontainer" >
              <h3>
              I possess a comprehensive skill set suitable for a Data Analyst role. Recently, I successfully passed the Microsoft PL-300 (Power BI Certification) exam, which has equipped me with advanced knowledge in business intelligence tools and techniques. Furthermore, I am a Google Certified Data Analyst, demonstrating proficiency in fundamental data analysis principles.<br/><br/>Beyond my technical expertise, I am an active investor, achieving an impressive 60% return on investment over a three-year period. Additionally, I am proficient in native mobile development using React Native, as well as web application development with React and JavaScript. I have applied these skills through participation in both live industry projects and freelancing tasks.
              </h3>
          </div>
        </div>

        {/* section 4 */}

        <div className="Section4" >
          
           <h3>
            I love hiking, exploring nature and sunshine ...
           </h3>
         
           

        </div>

        <div className="section Section6">
        <div class="Subsection1">
          <p onClick={
            ()=>{
              navigate('/projects')
            }
          }>
            My Work
          </p>
          <p onClick={
            ()=>{
              navigate('/')
            }
          }>
            Home
          </p>
        </div>
      </div>
      

    </div>
  );
};

export default AboutMe;
