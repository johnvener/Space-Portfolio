import React from 'react'
import HeroContent from '../sub/HeroContent'

const hero = () => {
  return (

    <div className="relative flex flex-col h-full w-full"  id='about-me'>
        <span>Hi World</span>
        <video 
        autoPlay 
        muted
        loop
        className='rotate-180 absolute top-[-340px] left-[0px] z-[1] w-full h-full object-fill'
        >
            <source src="/tech_glow.mp4" type="video/mp4"/>
        </video>
        <HeroContent/>
    </div>

  )
}

export default hero