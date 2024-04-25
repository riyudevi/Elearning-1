import React from 'react'
import Header from "../Components/Header"
import Carousel1 from '../Images/Carousel1.jpg'
import Service from '../Components/Services'
import Category from '../Components/Category'
import Course from '../Components/Course'
import Team from '../Components/Team'
import Footer from '../Components/Footer'
import Testimonial from '../Components/Testimonial'
const Home = () => {
  return (
   <>
   <Header
      title='Get educated online from your Home'
      para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien. Sed nec hendrerit sem. Donec luctus in purus ac dictum. Morbi ex felis, interdum sit amet suscipit at, scelerisque ac ipsum. Phasellus ultricies eget velit rutrum malesuada.'
      imgsrc={Carousel1}
      btntext='Join Now'
      visit='/courses'
   />
   <Service/>
   <Category/>
   <Course/>
   <Team/>
   <Testimonial/>
   <Footer/>
   </>
  )
}

export default Home