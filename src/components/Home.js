import React from 'react';
import Navbar from './Navbar';
import '../styles/Home.css'; // Import the CSS file
import Wave from '../wave.png'
const App = () => {
 
  
  return (

    
    <div>
      
      <Navbar />

      {/* Section 1 */}
      <div className="section section1" style={{ backgroundImage: `url(${Wave})` }}>
        <div className="left-part">
            <h2>I'm Aspiring Data Analyst With Strong Analytical Skills, Committed to Transforming Data into Actionable Insights.</h2>
            
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

        
          <button>
            Explore Projects
          </button>
        
      </div>

      {/* Section 3 */}
      <div className="section section3">
        {/* Content for Section 3 */}
      </div>

      {/* Section 4 */}
      <div className="section section4">
        {/* Content for Section 4 */}
      </div>

      {/* Section 5 */}
      <div className="section section5">
        {/* Content for Section 5 */}
      </div>
    </div>
   
  
  );
};

export default App;
