import React from 'react'
import Navbar from '../components/NavBar/navbar'
import Detailedbar from '../components/NavBar/deatailed_bar'


const defaultlayout = (Component) =>({...props})=>{
  return (
    <div >
        <Detailedbar/>
        <Navbar/>
        <Component{...props}/>
    </div>
  )
}

export default defaultlayout