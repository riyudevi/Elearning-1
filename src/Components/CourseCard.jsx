import React from 'react'

const CourseCard = (props) => {
  return (
    <>
    <div className="col-md-4">
     <div className="card">
      <img src={props.coimg} class="card-img-top" height={250} alt={props.coimg}/>
       <div className="card-body">
         <p className="card-text">{props.cotitle}</p>
       </div>
     </div>
    </div>
    </>
  )
}

export default CourseCard