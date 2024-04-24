import { React } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import './CSS/Style.css'
// import TextField from "@mui/material/TextField";
// import List from './Components/list'
   import Profile from "./practice/Profile.js";
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Services from './Pages/Services'
// import Contact from './Pages/Contact'
// import {Route,Routes} from 'react-router-dom'
// import Navbar from './Components/Navbar.jsx'
const App = () => {
  // const [inputText, setInputText] = useState("");
  // let inputHandler = (e) => {
  //   //convert input text to lower case
  //   var lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };
  return (
<>
<Profile/>
{/* <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/services' element={<Services/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
</Routes> */}
 {/* <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List input={inputText} />
    </div> */}

</>
  )
}

export default App
