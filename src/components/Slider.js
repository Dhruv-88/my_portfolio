import React, { Component,useState } from 'react';
import { render } from 'react-dom';
import '../styles/SliderStyles.css';



const Item = props => {
    
  return <div 
    className="slider-item" 
    style={{
      ":not(:last-of-type)": {
        marginRight: 12,
      }
    }}
    >
          <div style={{
            alignSelf:'center',
            color:'white',
            fontFamily:'Lato',
            width:'70%',
            fontSize:'x-large',
            textAlign: 'center',
            transition: 'opacity 0.10s ease-in-out'
            }}>{props.children}</div> 
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
     
      {/* <div className="slider-container" style={styles.container} ref={containerRef}>
        <ul className="slider-list">
          <Item textContent="Interactive Business Intelligence Dashboards" >
            <img 
             src={BIDashbord} 
             alt={"Interactive Business Intelligence Dashboards"}/>
          </Item>
          <Item textContent="Interactive Mobil Dashboards">
            <img 
             src={MobilDashbord}
             alt={"Interactive Mobil Dashboards"}/>
          </Item>
          <Item textContent="Analytical Reportss">
            <img
             src={AnalyticsReport}
              alt={"Analytical Reports"}/>
          </Item>
          <Item textContent="Native Mobil Application Development">
           <img
            src={MobilDevelopment}
            alt={"Native Mobil Application Development"}/>
          </Item>
          
        </ul>
      </div> */}

<div className="slider-container" style={styles.container}  ref={containerRef}>
      <ul className="slider-list">
        {props.projectImages.map((item, index) => (
          <Item key={index} >
            <img src={item} />
          </Item>
        ))}
      </ul>
    </div>
    </div>
  )

}

export default Slider