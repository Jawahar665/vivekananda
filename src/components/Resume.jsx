import React from 'react'
import  ResumeImg from '../assets/resume.jpg'

export const Resume = () => {
    const config = {
        link: 'https://drive.google.com/file/d/12Nh3h5MOIfkd8phzGWKQJnuicSZHm7Ev/view?usp=drive_link'
    }
  return (


    <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5 py-16'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl  text-center pb-10 font-bold'>Resume</h1>
                <p className='pb-5 '>You can view my resume <a className='btn bg-yellow-300' href={config.link} download > Download</a></p>
            </div>
        </div>
    </section>
  )
}
