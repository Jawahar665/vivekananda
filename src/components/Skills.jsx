import React from 'react'
import { Skill } from './Skill-two'

export const Skills = () => {
  return (
    <section id='skill'>
    <div className='skills-css' >
    <div className=' text-center text-2xl font-semibold'>
    <h1 className='py-6 text-3xl'>Skill OverView</h1>
    <p className=' text-lg font-normal py-3 text-balance'>Enthusiastic MERN stack developer with a solid foundation in MongoDB, Express.js, React, and Node.js. Proficient in Git for version control and GitHub for collaborative projects. Eager to apply skills in developing dynamic web applications and contributing to innovative teams. Dedicated to continuous learning and growth.</p>
</div>
    <div className=' flex flex-row justify-around max-md:hidden py-9 text-center '>
   <Skill type="Front-End" skill1="React-Js / Redux " skill2="JavaScript" skill3="Tailwind-Css" skill4="HTML / CSS"/>
   <Skill type="Back-End" skill1="Node-Js" skill2="Express-Js" skill3="Mongo-DB" />
   <Skill type="Others" skill1="Git" skill2="Git-Hub" />
   </div>
   <div className=' md:hidden py-10 '>
   <Skill type="Front-End" skill1="React-Js / Redux " skill2="JavaScript" skill3="Tailwind-Css" skill4="HTML / CSS"/>
   <Skill type="Back-End" skill1="Node-Js" skill2="Express-Js" skill3="Mongo-DB" />
   <Skill type="Others" skill1="Git" skill2="Git-Hub" />
   </div>
   </div>
   </section>
  )
}

