import React from 'react'
import defaultlayout from '../layout/default.layout';
import Firstslide from '../components/Department/firstslide/gastro.first'
import SecoundSlide from '../components/Department/secoundslide/gastro.sec'
import About from '../components/Department/about/gastro.about'
import Lastsection from '../components/Homepage_components/lastsection'


const gastro = () => {
  return (
    <div className=' mt-6'>
      <div className=' text-4xl font-bold font-serif underline flex justify-center'> Gastro-Department</div>
      <About/>
      <Firstslide />
      <div className=' container mx-auto px-4 md:px-12 my-8 fles fles-col gap-3'>
        <SecoundSlide/>
      </div>
      <Lastsection/>

    </div>
  )
}

export default defaultlayout(gastro)
