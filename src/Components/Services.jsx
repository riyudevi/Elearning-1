import React from 'react'
import ServiceCard from './ServiceCard'
import { ServiceData } from '../Data'

const Services = () => {
  return (
   <>
   <div className="container-xxl pt-5">
    <div className="container my-5">
        <div className="row gy-5 ">
            {
                ServiceData.map((x)=>{
                    return(
                       <ServiceCard
                       key={x.sid}
                       Icon={x.Icon}
                       stitle={x.stitle}
                       desc={x.desc}
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

export default Services
