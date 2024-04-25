import React from 'react'

const CategoryCard = (props) => {
  return (
    <>
    <div className="col-md-6">
     <div className="card">
      <img src={props.Catimg} class="card-img-top"  alt={props.Catimg}/>
       <div className="card-body">
         <p className="card-text">{props.title}</p>
       </div>
     </div>
    </div>
    </>
  )
}

export default CategoryCard