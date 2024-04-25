import React from 'react'
const ServiceCard=(props)=>{
    return(
       <>
        <div className="col-lg-3 icon_section">
            <div className="text-center">  
               {props.Icon}
               <h5>{props.stitle}</h5>
               <p>{props.desc}</p>
            </div>
        </div>
       </>
    )
}
export default ServiceCard