import React from 'react'
import Header from "../Components/Header"
import course4 from '../Images/course4.webp'
import Category from '../Components/Category'
import CourseCard from '../Components/CourseCard'
import Ecourse from '../Images/Ecourse.jpeg'
import { CourseData } from '../Data'
import Footer from '../Components/Footer'
const Courses = () => {
  return (
   <>
   <Header
      title='Get educated online from your Courses'
      para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien. Sed nec hendrerit sem. Donec luctus in purus ac dictum. Morbi ex felis, interdum sit amet suscipit at, scelerisque ac ipsum. Phasellus ultricies eget velit rutrum malesuada.'
      imgsrc={course4}
      btntext='Read More'
      visit='/'
   />

    <div className="container-xxl my-5">
    <div className="container course_section">
        <h6 className=' text-center px-3 mb-3'>Courses</h6>
        <h2 className='mb-5'> Popular Courses</h2>
        <div className="row gy-5 mb-2">  
            {
                CourseData.map((x)=>{
                    return(
                       <CourseCard
                       key={x.coid}
                       cotitle={x.cotitle}
                       coimg={x.coimg}
                       />
                    )
                })
            }
        </div>
    </div>
   </div>
   <div className="conatiner-xxl my-5">
    <div className="container">
        <div className="row  course_section">
            <div className="col-lg-6">
            <h6>About Our Courses</h6>
            <h2>Important information about our Courses</h2>
            <p>
                E-learning is a learning system that utilizes electronic resources for formalized education, allowing people to learn anytime, anywhere. It encompasses the use of technology, such as computers and the internet, for training, just-in-time information delivery, and guidance from experts.
           </p>
           <p> electronic learning, is the delivery of learning and training through digital resources. Although eLearning is based on formalized learning, it is provided through electronic devices such as computers, tablets and even cellular phones that are connected to the internet.</p>
            </div>
            <div className="col-lg-6">
              <div className='pt-5'>
                <img src={Ecourse} alt="" width={550}  height={350}/>
              </div>
            </div>
        </div>
    </div>
   </div>
   <Category/>
   <Footer/>
   </>
  )
}

export default Courses