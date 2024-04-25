import React from 'react'
import CourseCard from './CourseCard'
import { CourseData } from '../Data'

const Course = () => {
  return (
   <>
    <div className="container-xxl mb-5">
    <div className="container section_title">
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
   </>
  )
}

export default Course
