import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
 import profileImage from '../assets/Logo.png'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
     <header className="flex justify-between px-5 py-5 bg-black">
        <img className='w-40' src={profileImage}alt="main-nav-image" />
        <nav className="hidden md:block">
            <ul className="flex space-x-10 text-white ">
                <li className=' hover:text-blue-400'><a href="/#">Home</a></li>
                <li className=' hover:text-blue-400'><a href="/#about">About</a></li>
                <li className=' hover:text-blue-400'><a href="/#skill">Skills</a></li>
                <li className=' hover:text-blue-400'><a href="/#projects">Projects</a></li>
                <li className=' hover:text-blue-400'><a href="/#resume">Resume</a></li>
                <li className=' hover:text-blue-400'><a href="/#contact">Contact</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className="block md:hidden  bg-gray-800 opacity-75">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav">
                <li><a href="#">Home</a></li>
                <li><a href="/#about">About</a></li>
                <li><a href="/#skill">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
)
}
