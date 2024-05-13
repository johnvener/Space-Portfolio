import React from 'react'
import Image from "next/image"
import { Socials } from '@/constants'

const NavBar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E061]/50 bg-[#03001417 backdrop-blur-md z-50 px-10]">
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
            <a href="#about-me" className='h-auto w-auto flex flex-row items-center'>
                <Image
                src="/NavLogo.png"
                alt="logo"
                width={70}
                height={70}
                className="cursor-pointer hover:animate-slowspin"
                />
                    <span className='font-bold ml=[10px] hidden md:block text-gray-300'>
                    Fron-end Dev
                    </span> 
            </a>  
                <div className='w-[500px] h-full flex flex-row items-center justify between md:mr-20'>
                    <div className='w-full h-auto flex items-center justify-between border border-[#7042f861] bg-[#0300145E] mr-[15px] py-[10px] px-[20px] rounded-full text-gray-200'>
                    <a href="#about-me" className='cursor-pointer'>About Me</a>
                    <a href="#skills" className='cursor-pointer'>Skills</a>
                    <a href="#projects" className='cursor-pointer'>Projects</a>

                    </div>
                </div>
                    <div className='flex flex-row gap-5'>
                        {Socials.map((social) => (
                            <a href={social.link} key={social.name} target='_blank' rel="noopener norefferer">
                        <Image
                        src={social.src}
                        alt={social.name}
                        key={social.name}
                        width={24}
                        height={24}
                        />
                        </a>
                        ))}
                    </div>


        </div>
    </div>
  )
}

export default NavBar