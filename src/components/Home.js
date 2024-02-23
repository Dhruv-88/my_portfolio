import React,{ useRef ,useEffect,useState}  from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import Navbar from './Navbar';
import '../styles/Home.css'; // Import the CSS file
import Wave from '../assets/back8.jpg'
import { useNavigate } from 'react-router-dom';
import Slider from './Slider.js'
import Google from '../assets/google.svg';
import Microsoft from '../assets/microsoft.svg';
import HackerRank from '../assets/hackerRank.png';
import SplitSection from './SplitSection.js';
import ProjectImage from '../assets/SuperMarketAnalysis1.png';
import ContactForm from './ContactForm';


const App = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
 
  return (

    
    <div>
      
      <Navbar />

      {/* Section 1 */}
      <div className="section section1" >
        <div className="left-part">
            <p>I'm Aspiring Data Analyst With Strong Analytical Skills, Committed to Transforming Data into Actionable Insights.</p>
            
            </div>

            {/* Right Part */}
            <div className="right-part">
              
            </div>
      </div>

      {/* Section 2 */}
    
      <div className="section section2">
        
          <h1>
            I Excel in Crafting Powerful Analytics Projects, Business Intelligence Dashboards, and Insightful Data  Reports.
          </h1>
       
        
       

        
          <button onClick={
            ()=>navigate('/projects')
          }>
            Explore Projects
          </button>
        
      </div>

      <div>
         
      </div>
       <div>
        
       </div>
      {/* Section 3 */}
      
      {/* <div className="section section3">
        <Slider/>
      </div>
      */}

      <div className="section section3">
        <div className="subsection1">
          <h1 style={{color:'White',alignSelf:'Center'}}>
            Featured Work
            </h1>
        </div>
        <div>
          <img src={ProjectImage} alt="ProjectImage"/>
        </div>
        <div className="subsection2">
          <h2 >Interactive Business Intellegent Dashbord for SuperMarket Sales Data <br/>
          to analyse key matrics, company performance and sales.</h2>
          <button 
          onClick={
            ()=>navigate('/IndevidualProject/1')
          }
          className="ViewDashbordButton">View Dashbord</button>
        </div>

      </div>
      
    
    
      {/* Section 4 */}
      <div className="section section4">
          <p>I'm Certified With.</p>
          <div className="Certifications">
             <div className="CertiSubContainer">
                 <img src={Google}/>
                 <h2>Google Data Analyst</h2>
             </div>

             <div className="CertiSubContainer">
                 <img src={Microsoft}/>
                 <h2>Microsoft Data Analyst Associate</h2>
             </div>

             <div className="CertiSubContainer">
                 <img src={HackerRank}/>
                 <h2>Hacker Rank SQL 5 Start Badge</h2>
             </div>
          </div>
      </div>

      {/* Section 5 */}
      <div className="section section5">
       
       <p>I'd Love to work With You</p>

       <button  onClick={
        ()=>{
          window.location.href = 'https://www.linkedin.com/in/dhruv-patel30/';
        }
       }>
        Connect With Me
       </button>

      
      </div>

      {/* Section 6  */}
      <div className="section Section6">
        <div class="Subsection1">
          <p onClick={
            ()=>navigate('/projects')
          }>
            My Work 
          </p>
          <p onClick={
            ()=>navigate('/AboutMe')
          }>
            About Me
          </p>
        </div>
      </div>
    </div>
   
   
  
  );
};



export default App;

