import React from 'react'
import { NavLink } from 'react-router-dom'
import logo2 from '../Images/logo2.webp'
const Navbar = () => {
  return (
    <>
    <div className="container-xxl nav_section">
    <nav className="navbar navbar-expand-lg  ">
     <div className="container-fluid">
    <NavLink className="navbar-brand"to=""><img src={logo2} width={100} height={50} alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page"to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/pricing">
            Pricing
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"to="/contact">Contact</NavLink>
        </li>
        </ul>
        <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-primary" type="submit">login</button>
      </form>
    </div>
  </div>
</nav>
</div>
    </>
  )
}

export default Navbar