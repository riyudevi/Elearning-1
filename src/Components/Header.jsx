import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="container-xxl py-3  header_section">
        <div className="container py-5 ">
            <div className="row">
                <div className="col-lg-6 text-center">
                  <h1 className='text-white'>{props.title}</h1>
                  <p className='text-white'>{props.para}</p>
                  <NavLink to={props.visit} className='btn btn-primary mb-3'>{props.btntext}</NavLink>
                </div>
                <div className="col-lg-6">
                   <img src={props.imgsrc} className='img-fluid' alt={props.imgsrc} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header