import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react';
 import profileImage from '../assets/logo.png'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
     <header className="flex justify-between px-5 py-5 bg-black">
        <img className=' h-10' src={profileImage}alt="main-nav-image" />
        <nav className="hidden md:block">
            <ul className="flex space-x-10 text-white justify-center items-center ">
                <li className=' hover:text-blue-400'><a href="/#">Home</a></li>
                <li className=' hover:text-blue-400'><a href="/#vision">Vision</a></li>
                <li className=' hover:text-blue-400'><a href="/#mission">Mission</a></li>
                <li className=' hover:text-blue-400'><a href="/#projects">Pnpm run previewhilosophy</a></li>
            </ul>
        </nav>
        {toggleMenu && <nav className=" block md:hidden ">
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white  mobile-nav bg-black opacity-80 w-full space-y-3 px-3 py-3">
                <li><a href="#">Home</a></li>
                <li><a href="/#vision">Vision</a></li>
                <li><a href="/#mission">Mission</a></li>
                <li><a href="#projects">Philosophy</a></li>
            </ul>
        </nav>}
        <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5' /></button>
    </header>
)
}
