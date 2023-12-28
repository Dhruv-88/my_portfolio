import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import '../styles/SliderStyles.css';
import BIDashbord from '../assets/dashbord.jpg';
import MobilDashbord from '../assets/mobildashbord.png';
import AnalyticsReport from '../assets/analyticalReport.png';
import MobilDevelopment from '../assets/mobildevelopment.jpg';

const Item = props => {
    const [isHovered, setIsHovered] = useState(false);
  return <div 
    className="slider-item" 
    style={{
      ":not(:last-of-type)": {
        marginRight: 12,
      }
    }}
    onClick={()=>{
        alert(props.children)
    }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    
    >
         {isHovered ? <div style={{
            alignSelf:'center',
            color:'white',
            fontFamily:'Lato',
            width:'70%',
            fontSize:'x-large',
            textAlign: 'center',
            transition: 'opacity 0.10s ease-in-out'
            }}>{props.textContent}</div> : props.children}
    </div>
}


const Slider = props => {
  const containerRef = React.useRef(null)
  
  const styles = {
    hidescroll: {
      width: '100%',
      overflow: 'hidden',
    },
    container: {
      width: '100%',
      overflowX: 'auto',
      paddingBottom: 20,
      marginBottom: -20,
    },
  }

  const goTo = (n) => {
    containerRef.current.scrollLeft = containerRef.current.children[0].children[n-1].offsetLeft
  }

  const goToByElem = (elem) => {
    containerRef.current.scrollLeft = elem.offsetLeft;
  }

  const handleClick = (e) => {
    goToByElem(e.target)
  }

  return (
    <div className="slider-wrapper" style={styles.hidescroll}>
     <div className="Expertices">
        <text id="expert" style={{ color:'white',
                fontFamily:"Lato",
                marginLeft:'2vw',
                fontSize:'xx-large',
                
                }}>
            My Expertices
        </text>
     </div>
      <div className="slider-container" style={styles.container} ref={containerRef}>
        <ul className="slider-list">
          <Item onClick={handleClick} textContent="Interactive Business Intelligence Dashboards" >
            <img 
             src={BIDashbord} 
             alt={"Interactive Business Intelligence Dashboards"}/>
          </Item>
          <Item onClick={handleClick} textContent="Interactive Mobil Dashboards">
            <img 
             src={MobilDashbord}
             alt={"Interactive Mobil Dashboards"}/>
          </Item>
          <Item onClick={handleClick} textContent="Analytical Reportss">
            <img
             src={AnalyticsReport}
              alt={"Analytical Reports"}/>
          </Item>
          <Item onClick={handleClick} textContent="Native Mobil Application Development">
           <img
            src={MobilDevelopment}
            alt={"Native Mobil Application Development"}/>
          </Item>
          
        </ul>
      </div>
    </div>
  )

}

export default Slider