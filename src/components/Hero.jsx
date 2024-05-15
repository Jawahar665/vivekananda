import React from 'react'
import HeroImg from '../assets/Heroprofile.png'

export default function Hero() {
    return (
        <div>
            <section className='flex flex-row justify-center px-5 bg-secondary max-md:hidden '>
                <h1 className='w-1/2 py-24 text-white font-Canada font-semibold text-6xl space-y-5'>Hi,Iam
                    <br />
                    <p className='text-black font-Lato-900 text-6xl'>Jawahar</p>
                    <p className='  text-3xl'> Iam a Full Stack Developer</p>
                    <p className='text-lg font-light space-x-8 w-9/12 text-justify'>As an entry-level MERN Stack Developer, I create full-stack web applications using MongoDB, Express.js, React.js, and Node.js. With strong JavaScript skills and experience in front-end and back-end development, I am proficient in Git and GitHub for version control, eager to contribute to dynamic projects and grow my expertise</p>
                    <button className=' text-xl bg-amber-400 text-black px-3 py-3 rounded-md' > <a href="https://drive.google.com/file/d/12Nh3h5MOIfkd8phzGWKQJnuicSZHm7Ev/view?usp=drive_link">Check Resume</a></button>
                </h1>
                <img className=' w-1/4 py-24' src={HeroImg} alt="Hero-img" />

            </section >
            <section className='flex flex-col-reverse justify-center items-center py-24 text-center bg-secondary md:hidden'>
                <h1 className=' text-white font-Canada font-semibold text-2xl py-4'>Hi,Iam
                    <br />
                    <p className='text-black font-Lato-900 text-5xl py-2'>Jawahar</p>
                    <p className='py-2'> Iam a Full Stack Developer</p>
                    <p className='text-lg font-light w-96 text-justify py-2 '>As an entry-level MERN Stack Developer, I create full-stack web applications using MongoDB, Express.js, React.js, and Node.js. With strong JavaScript skills and experience in front-end and back-end development, I am proficient in Git and GitHub for version control, eager to contribute to dynamic projects and grow my expertise</p>
                    <button className='  bg-amber-400 text-black px-2 py-2 rounded-md mx-10 '  > <a href="https://drive.google.com/file/d/12Nh3h5MOIfkd8phzGWKQJnuicSZHm7Ev/view?usp=drive_link">Check Resume</a></button>
                </h1>
                <img className=' w-72 ' src={HeroImg} alt="Hero-img" />

            </section >

        </div>
    )
} 