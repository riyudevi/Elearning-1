import React from 'react'
import {NavLink} from 'react-router-dom'
const Footer = () => {
  return (
   <>
   <div className=' container-xxl py-3 footer'> 
   <div className='container py-4'>
   <p className='text-center p_sec'>eLearning@2023</p>
   <div className="row para_sec">
    <div className="col-md-4">
     <h2>Resourses</h2>
     <ul>
        <li><NavLink href="#">About us</NavLink></li>
        <li><NavLink href="#">Services</NavLink></li>
        <li><NavLink href="#">Courses</NavLink></li>
        <li><NavLink href="#">Testimonial</NavLink></li>
        <li><NavLink href="#">Our Team</NavLink></li>
      </ul>
    </div>
    <div className="col-md-4">
      <div className=''>
      <h2>About us</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore molestiae impedit perferendis, quisquam atque iste, architecto optio perspiciatis possimus tenetur deserunt accusamus eius! </p>
      </div>
    </div>
    <div className="col-md-4">
      <div className="">
      <h2>Contat us</h2>
      <ul>
        <li><NavLink to=''><i class="bi bi-envelope-arrow-up-fill"></i>elearning@gmail.com</NavLink></li>
        <li><NavLink to=''><i class="bi bi-geo-alt-fill"></i>Techlive 8-Phase  Mohali Chandigarh</NavLink></li>
      </ul>
      </div> 
    </div>
   </div>
   </div>
   </div>
   </>
  )
}

export default Footer