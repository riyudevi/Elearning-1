import React from 'react'
import Header from "../Components/Header"
import course3 from '../Images/course3.jpg'
import Aboutimage from '../Images/course7.jpeg'
import { NavLink } from 'react-router-dom'
import Team from '../Components/Team'
import Footer from '../Components/Footer'
const About = () => {
  return (
   <>
   <Header
      title='Get educated online from your About'
      para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien. Sed nec hendrerit sem. Donec luctus in purus ac dictum. Morbi ex felis, interdum sit amet suscipit at, scelerisque ac ipsum. Phasellus ultricies eget velit rutrum malesuada.'
      imgsrc={course3}
      btntext='Know More'
      visit='/contact'
   />
   <div className="container-xxl py-5 ">
    <div className="container my-5">
      <div className="row gy-5 About_section">
        <div className="col-lg-6">
         <img src={Aboutimage} alt="aboutimg"  height={600} width={450}/>
        </div>
        <div className="col-lg-6">
          <h6>About Us</h6>
          <h2>Welcome to eLEARNING</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident qui facilis nemo quam quidem dolores unde nulla blanditiis, deserunt aliquam quibusdam non atque, in voluptatibus fugiat cupiditate. Numquam, voluptatum doloribus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque velit mollitia, ipsam, voluptates eveniet, nisi maiores iusto cum ea ex ut qui? Dignissimos recusandae ex blanditiis, eius dolorem alias voluptatum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error totam maiores laudantium quod! Eveniet ut vero quae dolore! Ipsa minus ducimus quisquam itaque exercitationem qui reiciendis voluptates ut esse blanditiis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nobis obcaecati esse, omnis quos dolore, quam laudantium ipsa perferendis voluptate culpa, consequatur iusto voluptatum tempora cumque sint assumenda dolores impedit!</p>
          <NavLink to='/courses' className='btn btn-primary'>Read More</NavLink>
        </div>
      </div>
    </div>
   </div>
   <Team/>
   <Footer/>
   </>
  )
}

export default About