import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './CSS/Style.css'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import Contact from './Pages/Contact.jsx'
import Navbar from './Components/Navbar.jsx'
import {Route,Routes} from 'react-router-dom'

const App=()=>{
  return (
    <>
      <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/courses' element={<Courses/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
     </Routes> 
     {/* <Task/> */}

    </>
  )
}

export default App
