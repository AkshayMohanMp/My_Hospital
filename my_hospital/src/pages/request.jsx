import React from 'react'
import defaultlayout from '../layout/default.layout'
import Request from '../components/Homepage_components/request'


import Lastsection from '../components/Homepage_components/lastsection'



const Appontment = () => {


  return (
    <>
  
      <div className=' shadow-md' >
        <Request/>
      </div>
      <Lastsection classname=' table-footer-group'/> 

    </>
  )
}

export default defaultlayout(Appontment);


// text-2xl font-bold font-serif underline flex justify-center