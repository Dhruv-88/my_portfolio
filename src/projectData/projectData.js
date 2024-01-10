// projectsData.js

import FinancialReport from '../assets/financialreport.png';
import FinancialReport2 from '../assets/back10.jpg';

// project7 images
import p7_1 from '../assets/pro_7img1.png';
import p7_2 from '../assets/pro_7img2.png';
import p7_3 from '../assets/pro_7img3.png';



const projectsData = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description for Project 1.',
      imageSource: FinancialReport,
      bgColor: '#AC9B8E',
      projectCategory:'BIproject'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description for Project 2.',
      imageSource: FinancialReport2,
      bgColor: '#E4E2E5',
      projectCategory:'BIproject'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Description for Project 1.',
        imageSource: FinancialReport,
        bgColor: '#3A302E',
        projectCategory:'DAR'
      },
      {
        id: 4,
        title: 'Project 4',
        description: 'Description for Project 2.',
        imageSource:FinancialReport,
        bgColor: '#CFC5B1',
        projectCategory:'DAR'
      },
      {
        id: 5,
        title: 'Project 5',
        description: 'Description for Project 1.',
        imageSource: FinancialReport,
        bgColor: '#7E693E',
        projectCategory:'Excel'
      },
      {
        id: 6,
        title: 'Project 6',
        description: 'Description for Project 2.',
        imageSource: FinancialReport,
        bgColor: '#4D1C13',
        projectCategory:'Excel'
      },
      {
        id: 7,
        title: 'Furniture Reality',
        description: `Furniture Reality is a user-friendly mobile app that utilizes Augmented Reality to bring furniture to life in users' spaces. With a straightforward interface, it allows customers to visualize furniture in their rooms, helping them assess size, scale, and style. Users can customize furniture colors and finishes to match existing decor and preview it in different lighting conditions, minimizing the likelihood of dissatisfaction and returns.`,
        imageSource: FinancialReport,
        bgColor: '#626635',
        projectCategory:'APPLICATION',
        projectImages:[p7_1,p7_2,p7_3],
        projectSkills:['ReactNative','React Viro(AR)','Java Script','3D - modeling','CSS','HTML']
        
      },
      {
        id: 8,
        title: 'Project 8',
        description: 'Description for Project 2.',
        imageSource:FinancialReport,
        bgColor: '#DEAE4D',
        projectCategory:'APPLICATION'
      
      },

    // Add more projects as needed
  ];
  
  export default projectsData;
  