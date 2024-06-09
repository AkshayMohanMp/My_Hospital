import React, { useState } from 'react'
import defaultlayout from '../layout/default.layout'
import Specialities from '../components/Homepage_components/specialities'
import Frontslide from '../components/Homepage_components/front-slide'
import Lastslide from '../components/Homepage_components/lastslide'
import Lastsection from '../components/Homepage_components/lastsection'



const Homepage = () => {

const [gallery, setGallery] = useState([])

  return (
    <>
    
          <Frontslide />

          <div className=' container mx-auto px-4 md:px-12 '>
            <Specialities/>
          </div>
          
          <div className=' container mx-auto px-4 md:px-12 my-8 fles fles-col gap-3'>
            <Lastslide
              title="Gallery"
              posters={gallery}
              isDark={true} />
          </div>
        
          <div>
            
          <Lastsection className='mx-auto px-4 md:px-12 mr-3 ml-3 my-8 '/> 
          </div>
          

    </>
  )
}

export default defaultlayout(Homepage);
