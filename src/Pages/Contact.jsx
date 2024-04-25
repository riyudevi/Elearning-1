import React from 'react'
import Header from "../Components/Header"
import course6 from '../Images/course6.webp'
import Footer from '../Components/Footer'
import buisnesswoman3 from '../Images/buisnesswoman3.avif'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
 const Contact = () => {
  const[contactinfo,setContactinfo]=useState({
    fullname:"",
    email:"",
    message:""
  });
  const handleChange=(event)=>{
    setContactinfo({...contactinfo,[event.target.name]:event.target.value})
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(contactinfo)
  };
  return (
   <>
   <Header
      title='Get educated online from your Contact'
      para='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a velit quam. Phasellus tincidunt sit amet est sit amet iaculis. Proin tellus orci, pulvinar vitae ante eget, dapibus maximus sapien. Sed nec hendrerit sem. Donec luctus in purus ac dictum. Morbi ex felis, interdum sit amet suscipit at, scelerisque ac ipsum. Phasellus ultricies eget velit rutrum malesuada.'
      imgsrc={course6}
      btntext='Contact Us'
      visit='/contact'
   />
   <div className="container-xxl py-5 Contact_section">
    <div className="container">
      <h6 className='text-center'>Contact Us</h6>
      <div className="row gy-5">
        <div className="col-lg-6">
          <div className="my-5">
           <img src={buisnesswoman3} alt="ui_ux" width={530} />
          <div className="my-3">
            <h5>Get in Touch</h5>
            <p className="mt-3"><LocationOnIcon/> Techlive E-92 Mohali</p>
            <p className="mt-3"><MailOutlineIcon/>Email:contact@info.com</p>
            </div>
        </div>
        </div>
        <div className="col-lg-6">
        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className='form-label' label="fullname" variant="outlined" >Fullname</label>
            <TextField type="text" label='fullname' className='form-control'   autoComplete="off" name='fullname'onChange={handleChange}required />
          </div>
          <div className="my-5">
            <label className='form-label'>Email</label>
            <TextField type="email" label='email' className='form-control'  autoComplete="off" name='email'onChange={handleChange}required />
          </div>
          <div className="my-5">
            <label className='form-label'>Message</label>
            <TextField type='text' label="message" className='form-control'  autoComplete="off" rows="10"  required name="message" onChange={handleChange} />
            <div className="mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
        </div>
      </div>
    </div>
   </div>
   <Footer/>
   </>
  )
}

export default Contact