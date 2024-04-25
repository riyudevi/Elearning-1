import React from 'react'

const TeamCard = (props) => {
  return (
    <>
    <div className="col-md-3">
    <div className="card">
     <img src={props.timg} class="card-img-top" height={200}  alt="timg"/>
      <div className="card-body">
        <h5 className='card-title'> {props.fullname}</h5>
        <p className="card-text">{props.desg}</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default TeamCard