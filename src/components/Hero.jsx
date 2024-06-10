import HeroImg from '../assets/Heroprofile.png';
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import React from 'react'

export const Hero = () => {
  const config  = {
    subtitle: 'Full-stack developer & Designer',
    social: {
        instagram: 'https://www.instagram.com/jawas__lyf?igsh=MW1jNGVmdnVyMDcweA==',
        facebook: 'https://www.facebook.com/jawahar.jawaharselvaraj?mibextid=ZbWKwL',
        linkedin: 'https://github.com/Jawahar665'
    }
}


return <section className='flex flex-col-reverse max-md:text-center md:flex-row px-5 py-40 bg-primary justify-center items-center'>
   <div className='md:w-1/2 flex flex-col space-y-4'>
        <h1 className=' max-md:my-4 text-white text-5xl '>Hi, I'm  </h1>
        <h1 className=' text-6xl'>Jawahar</h1> 
         <p className=' text-white text-2xl'>{config.subtitle}</p>
       
        <div className='flex py-9 max-md:justify-center'>
            <a href={config.social.instagram} className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
            <a href={config.social.facebook} className='pr-5 hover:text-white'><AiOutlineFacebook size={40}/></a>
            <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>

        <div>
            <button className=' bg-yellow-300 px-6 py-3 rounded-xl '><a className='text-lg font-semibold' href="https://online.flippingbook.com/view/1024806870/">Check Resume</a></button>
        </div>
   </div>
   <img className=' max-md: w-3/4 md:w-1/4' src={HeroImg} />
</section>
}
