import './App.css';
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Routes, Route} from "react-router-dom";


import Career from './pages/career';
import OrthoDepartment from './pages/ortho';
import GynecDepartment from './pages/Gynec';
import GastroDepartment from './pages/gastro';
import EmergencyDepartment from './pages/emergency';
import EntDepartment from './pages/ent';
import Aboutpage from './pages/aboutpage';
import Homepage from './pages/homepage';
import Request from './pages/request'








function App() {
  return <Routes>

    <Route path='/' element={<Homepage/>}/>
    <Route path='/Department/Ortho' element={<OrthoDepartment/>}/>
    <Route path='/Department/Gynec' element={<GynecDepartment/>}/>
    <Route path='/Department/Gastro' element={<GastroDepartment/>}/>
    <Route path='/Department/Emergency' element={<EmergencyDepartment/>}/>
    <Route path='/Department/ENT' element={<EntDepartment/>}/>
    <Route path='/Career' element={<Career/>}/>
    <Route path='/Aboutpage' element={<Aboutpage/>}/>
    <Route path='/Appontment_Booking' element={<Request/>}/>
    
    
  </Routes>
}

export default App;
