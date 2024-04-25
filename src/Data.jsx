import AddHomeIcon from '@mui/icons-material/AddHome';
import LanguageIcon from '@mui/icons-material/Language';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import course1 from './Images/course1.jpg'
import graphic_design from './Images/graphic_design.jpg'
import course3 from './Images/course3.jpg'
import course4 from './Images/course4.webp'
import dataScience from './Images/dataScience.jpg'
import course6 from './Images/course6.webp'

import course9 from './Images/course9.jpg'
import digitalMarketing from './Images/digitalMarketing.jpg'

import buisnesswoman3 from './Images/buisnesswoman3.avif'
import buisnesswoman2 from './Images/buisnesswoman2.avif'
import instructor3 from './Images/instructor3.avif'
import instructor4 from './Images/instructor4.avif'

import test4 from './Images/test4.avif'
import test7 from './Images/test7.jpg'
import test9 from './Images/test9.avif'
import test6 from './Images/test6.jpg'

export const ServiceData=[
    {
        sid:1,
        Icon:<SchoolIcon color='primary' sx={{fontSize:80}}/>,
        stitle:"Skill Instructor",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien."
       },
       {
       sid:2,
       Icon:<LanguageIcon color='primary' sx={{fontSize:80}}/>,
       stitle:"Online Classes",
       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien."      },
      {
        sid:3,
        Icon:<AddHomeIcon color='primary' sx={{fontSize:80}}/>,
        stitle:"Home Projects",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien."       },
       {
        sid:4,
        Icon:<LibraryBooksIcon color='primary' sx={{fontSize:80}}/>,
        stitle:"Book liberary",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien."       },
];
export const CategoryData=[
  {
    cid:1,
    title:"Web Development",
    Catimg:course9,
   },
   {
     cid:2,
     title:"Digital Marketing",
     Catimg:digitalMarketing,
    },
  

];
export const CourseData=[
  {
    coid:1,
    cotitle:"Web Designing",
    coimg:course1,
   },
   {
     coid:5,
     cotitle:"Graphic Designing",
     coimg:graphic_design,
    },
   {
    coid:2,
    cotitle:"React",
    coimg:course3,
   },
   {
    coid:3,
    cotitle:"Developing",
    coimg:course4,
   },
   {
     coid:6,
     cotitle:"Data Science",
     coimg:dataScience,
    },
   {
    coid:4,
    cotitle:"MEARN",
    coimg:course6,
   },
 
];

 export const TeamData=[
  {
    tid:1,
    fullname:"Riya Suryavanshi",
    desg:"CEO",
    timg:buisnesswoman3,
  },
  {
    tid:3,
    fullname:"Karan kapoor",
    desg:"Desginer",
    timg:instructor3,
  },
  {
    tid:2,
    fullname:"Aaisha Thakur",
    desg:"HR",
    timg:buisnesswoman2,
  },
 
  {
    tid:4,
    fullname:"Shravan Kumar",
    desg:"Developer",
    timg:instructor4,
  },
 ];
 export const TestimonialData=[
  {
    tmid:1,
    fullname:"Client name",
    profession:"Profession",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",    
    tmimg:test4,  
 },

{
  tmid:2,
  fullname:"Client name",
  profession:"Profession",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tmimg:test6,  
},
{
  tmid:3,
  fullname:"Client name",
  profession:"Profession",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  tmimg:test7,  
},
{
  tmid:4,
  fullname:"Client name",
  profession:"Profession",
  desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",  
  tmimg:test9,  
},
    

 ];