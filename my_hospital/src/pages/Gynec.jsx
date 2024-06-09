import React from 'react'
import defaultlayout from '../layout/default.layout';
import Firstslide from '../components/Department/firstslide/gynec.first'
import SecoundSlide from '../components/Department/secoundslide/gynec.sec'
import About from '../components/Department/about/gynec.about'
import Lastsection from '../components/Homepage_components/lastsection'


const Gynec = () => {
  return (
    <div className=' mt-6'>
      <div className=' text-4xl font-bold font-serif underline flex justify-center'> Gynec-Department</div>
      <About/>
      <Firstslide />
      <div className=' '>
        <SecoundSlide/>
      </div>
      <Lastsection/>

    </div>
  )
}

export default defaultlayout(Gynec)
