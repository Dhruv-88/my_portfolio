// // src/components/Navbar.js

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Navbar.css';
// import Logo from '../assets/Dhruvnew.svg';
// import navIcon1 from '../assets/nav-icon1.svg';
// import navIcon2 from '../assets/github.svg';
// import navIcon3 from '../assets/nav-icon3.svg';
// const Navbar = () => {
//   const navigate = useNavigate();
//   const [navbarOpacity, setNavbarOpacity] = useState(1);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);



//   // handeling drop down for mobil view
//   const handleMenuOpen = () => {
//     setDropdownVisible(!isDropdownVisible);
//     // alert(!isDropdownVisible);
//   };

  

//   const handleHomeClick = () => {
//     navigate('/');
//   };

//   const handleProjectsClick = () => {
//     navigate('/projects');
//   };

//   const handleCertificationsClick = () => {
//     navigate('/AboutMe');
//   };

//   useEffect(() => {
//     let previousScrollPosition = 0;
  
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const maxScroll = window.innerHeight * 0.4;
  
//       // Gradually reduce opacity until scrollPosition reaches 20% of the screen
//       const opacity = Math.min(scrollPosition / maxScroll, 1);
  
//       setNavbarOpacity(opacity);
  
//       // Show the Navbar again if scrolling upwards
//       if (scrollPosition < previousScrollPosition) {
//         setNavbarOpacity(1);
//       }
  
//       previousScrollPosition = scrollPosition;
//     };
  
//     window.addEventListener('scroll', handleScroll);
  
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
    
//     <div className={`navbar ${navbarOpacity < 1 ? 'fixed' : ''}`} style={{ opacity: navbarOpacity,backgroundColor:'black',transition: 'opacity 0.10s ease-out' }}>
//       <div className="name-link" onClick={handleHomeClick}>
//         <img src={Logo} />
//       </div>
//       <div className="nav-links">
//       <div className="social-icon">
//                                 <a href="https://www.linkedin.com/in/dhruv-patel30/"><img src={navIcon1} alt="" /></a>
//                                 <a href="https://github.com/Dhruv-88"><img src={navIcon2} alt="" /></a>
//        </div>
//         <button className="button-style" onClick={handleProjectsClick}>
//           Projects
//         </button>
//         <button className="button-style" onClick={handleCertificationsClick}>
//           About Me
//         </button>
//         <div className="dropdown-menu">
//           <button 
//             onClick={handleMenuOpen} 
            
//             >
//               Dropdown Menu
//           </button>
//           {isDropdownVisible&&
//           <ul className="dropDownIndevidul">
//             <li>
//               <div className="dropDownIndevidulContainer">
//                    <a href="https://www.linkedin.com/in/dhruv-patel30/">
//                       <img src={navIcon1} alt="" />
//                       <h4>
//                         LinkedIn
//                       </h4>
//                   </a>
//               </div>
//              </li>

//              <li>
//               <div>
//                   <a href="https://github.com/Dhruv-88">
//                       <img src={navIcon2} alt="" />
//                       <h4>
//                         Github
//                       </h4>
//                   </a>
//               </div>
//              </li>
            
//              <li>
//               <div>
//                   <a href="https://github.com/Dhruv-88">
//                       <img src={navIcon1} alt="" />
//                       <h4>
//                         My Resume
//                       </h4>
//                   </a>
//               </div>
//              </li>

//           </ul>}
//     </div>
//       </div>
    
//     </div>
//   );
// };

// export default Navbar;



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Dhruvnew.svg';
import Menu from '../assets/menu.png';
import navIcon1 from '../assets/nav-icon1.svg';
import '../styles/Navbar.css';
import ResumePDF from '../assets/datanalyst_resume.pdf'; // Import the PDF file
import { saveAs } from 'file-saver';

const Navbar = () => {
  const navigate = useNavigate();
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleProjectsClick = () => {
    navigate('/projects');
  };

  const handleCertificationsClick = () => {
    navigate('/AboutMe');
  };

  const onDownloadResumeButtonClick = () => {
    fetch(ResumePDF)
      .then(response => response.blob())
      .then(blob => {
        // Use file-saver library to save the blob as a file
        saveAs(blob, 'Dhruv_resume.pdf');
      })
      .catch(error => {
        console.error('Error downloading resume:', error);
      });
};
 

  return (
    <nav className="navbar">
      <div className="container">
        <div 
          className="name-link"
          onClick={handleHomeClick}
        >
         <img src={Logo} />
        </div>
        <div 
          className="menu-icon" 
          onClick={handleShowNavbar}>
          <img 
           src={Menu} 
          />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li onClick={handleCertificationsClick}>
              About Me
            </li>
            <li onClick={handleProjectsClick}>
              My Projects
            </li>
            <li onClick={() => { 
                 window.location.href = 'https://www.linkedin.com/in/dhruv-patel30/';
                 setShowNavbar(false)
               }}
               >
             LinkedIn
            </li>
            <li onClick={() => { 
                 window.location.href = 'https://github.com/Dhruv-88';
                 setShowNavbar(false)

               }}
               >
              Github
            </li>
            
            <li onClick={onDownloadResumeButtonClick}>
              My Resume
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar