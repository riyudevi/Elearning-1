import React from 'react'
import TeamCard from './TeamCard'
import {TeamData} from '../Data'
const Team = () => {
  return (
    <>
    <div className="container-xxl py-5">
      <div className="container section_team">
        <h6 className=' text-center px-3 mb-3'>Instructor</h6>
        <h2 className='mb-5'>Expert Instructors</h2>
        <div className="row gy-5 mb-2">  
             {
                 TeamData.map((x)=>{
                     return(
                        <TeamCard
                        key={x.tid}
                        fullname={x.fullname}
                        desg={x.desg}
                        timg={x.timg}
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

export default Team