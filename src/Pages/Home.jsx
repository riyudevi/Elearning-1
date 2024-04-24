import React from 'react'
import online_shopping from '../Images/online_shopping.jpeg'
const Home = () => {
  return (
    <>
    <div className="container-xxl m-5 header_section">
      <div className="row gy-5">
        <div className="col-lg-6 first_sec">
          <h2 className='mb-4'>Sell online to 14 Cr+ customers at <br/>
          <strong className="pink-color" >0% Commission</strong></h2>
          <p className='mb-4'>Become a Meesho seller and grow your business across India</p>
          <p className='mb-4'>Don't have a GSTIN or have a Composition GSTIN?
           You can still sell on Meesho. Click here to know more.</p>
           <form class="d-flex" role="search">
           <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
           <button class="btn btn-primary" type="submit">login</button>
      </form>
        </div>
        <div className="col-lg-6">
          <img src={online_shopping} alt="img" width={500} />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home