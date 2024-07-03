import HeroImg from '../assets/Heroprofile.png';
import React from 'react'

export const Hero = () => {


return <section className='flex flex-col-reverse max-md:text-center md:flex-row px-5 py-40 bg-primary justify-center items-center'>
   <div className='md:w-1/2 flex flex-col space-y-4'>
        <h1 className=' text-6xl'>Vivekananda</h1> 
         <p className=' text-white text-2xl w-96 py-10'>Everything is Easy When you is busy but nothing is esay when you are lazy</p>
   </div>
   <img className=' max-md: w-3/4 md:w-1/4' src={HeroImg} />
</section>
}
