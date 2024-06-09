import React from 'react'
import defaultlayout from '../layout/default.layout'
import Lastsection from '../components/Homepage_components/lastsection'
import Career from '../components/career/careerList'
import Frontslide from '../components/Homepage_components/front-slide'


const career = () => {
  return (
    <>
    <Frontslide />


      <Career classname=' h-full my-1'/>
      
    
    <Lastsection classname='place-content-end'/>

    </>
    
  )
}

export default defaultlayout(career);
