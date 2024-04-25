import React from 'react'

const TestimonialCard = (props) => {
  return (
    <>
    <div className="col-lg-3">
        <div className="card_test">
            <img src={props.tmimg} alt="tmimg"   width={150} height={150} />
            <h5 className='mt-2'>{props.fullname}</h5>
            <h3 className='mt-2'>{props.profession}</h3>
            <p className='mt-2'>{props.desc}</p>
        </div>
    </div>
    </>
  )
}

export default TestimonialCard