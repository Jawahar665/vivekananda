import React from 'react'
import propTypes from 'prop-types'


export const Skill = (props) => {
  return (
    <>
   
    <div className=' bg-blue-200 max-md:hidden  px-28 py-14 my-4 '>
        <h1 className=' text-center text-2xl font-semibold'>{props.type}</h1>
        <ul className='  py-7 text-lg space-y-4 text-start'>
            <li>{props.skill1}</li>
            <li>{props.skill2}</li>
            <li>{props.skill3}</li>
            <li>{props.skill4}</li>
        </ul>

    </div>
    <div className=' bg-blue-200  md:hidden flex flex-col justify-center items-center mx-14 mb-5 pt-6' >
        <h1 className=' text-center text-2xl font-semibold'>{props.type}</h1>
        <ul className='  py-10 text-lg space-y-4 text-start'>
            <li>{props.skill1}</li>
            <li>{props.skill2}</li>
            <li>{props.skill3}</li>
            <li>{props.skill4}</li>
        </ul>

    </div>
    
    </>
  )
}
Skill.propTypes={
    type:propTypes.string,
    skill1:propTypes.string,
    skill2:propTypes.string,
    skill3:propTypes.string,
    skill4:propTypes.string
}
