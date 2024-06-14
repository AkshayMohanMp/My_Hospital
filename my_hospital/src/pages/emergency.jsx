import React from 'react'
import defaultlayout from '../layout/default.layout'
import About from '../components/Department/about/emr.about'
import Firstslide from '../components/Department/firstslide/emr.first'
import SecoundSlide from '../components/Department/secoundslide/emr.sec'
import Lastsection from '../components/Homepage_components/lastsection'



const emergencypage = () => {
  return (
    <div>
    <div className=' mt-6'>
      <div className=' text-4xl font-bold font-serif underline text-shadow-lg flex justify-center'> Emergency-Department</div>
      <About/>
      <Firstslide />
      <div className=' container mx-auto px-4 md:px-12 my-8 fles fles-col gap-3'>
        <SecoundSlide/>
      </div>
      
      <Lastsection/>

    </div>

    </div>
  )
}

export default defaultlayout(emergencypage);


/* eslint-disable react/prop-types */
