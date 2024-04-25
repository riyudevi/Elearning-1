import React from 'react'
import { TestimonialData } from '../Data'
import TestimonialCard from './TestimonialCard'
const Testimonial = () => {
  return (
   <>
   <div className="container-xxl py-5">
      <div className="container testi_section">
        <h6 className=' text-center px-3 mb-3'> Testimonials</h6>
        <h2 className='mb-5'>Our Students Say</h2>
        <div className="row gy-5 mb-2">  
             {
                 TestimonialData.map((x)=>{
                     return(
                        <TestimonialCard
                        key={x.tmid}
                        fullname={x.fullname}
                        desc={x.desc}
                        profession={x.profession}
                        tmimg={x.tmimg}
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

export default Testimonial