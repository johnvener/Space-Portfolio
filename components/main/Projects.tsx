"use client"

import React from 'react'
import ProjectCard from '../sub/ProjectCard'
import {motion} from 'framer-motion'
import { slideInFromTop } from '@/utils/motions'
const Projects = () => {
  return (
    
    <div className='flex flex-full relative items-center justify-center py-20 mt-20' id='projects'>

<div className='absolute w-auto h-auto top-[-50px] z-[5]'>
            <motion.div
            variants={slideInFromTop}
            className='text-[40px] font-medium text-center text-gray-200'
            >
     
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>My Projects</span>

            </motion.div>
        </div>

   
      <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
      <ProjectCard
          src="/NextWebsite.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Interactive Website Cards"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>

    </div>
  )
}

export default Projects