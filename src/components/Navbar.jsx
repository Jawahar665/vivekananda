import React, { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'


export const Navbar = () => {
   const [toggleMenu,setToggleMenu]=useState("false")
  return (
    <header className=" font-display flex justify-between py-5  bg-black ">
      <a  href="#">
        <img  className="h-7 px-10"src="images/Logo.png" alt="main-logo" />
      </a>
      <nav className="  hidden md:block" >
        <ul className=" flex text-white gap-12 my-1 text-lg  ">
          <li className=" hover:text-blue-400" >  <a href="#">Home</a></li>
          <li className=" hover:text-blue-400" > <a href="#">About</a></li>
          <li className=" hover:text-blue-400" ><a href="#">Projects</a> </li>
          <li className=" hover:text-blue-400" > <a href="#">Skills</a> </li>
          <li className=" hover:text-blue-400" ><a href="#">Contact</a> </li>
        </ul>
      </nav>
      
     { toggleMenu && <nav className=" mobile-nav block md:hidden " >
        <ul  className=" flex-col text-white gap-14 text-lg text-center my-7">
          <li className=" py-2 hover:text-blue-400" >  <a href="#">Home</a></li>
          <li className=" py-2  hover:text-blue-400"> <a href="#">About</a></li>
          <li className=" py-2  hover:text-blue-400"><a href="#">Projects</a> </li>
          <li className=" py-2  hover:text-blue-400"> <a href="#">Skills</a> </li>
          <li className=" py-2  hover:text-blue-400"><a href="#">Contact</a> </li>
          <li className=" py-2  hover:text-blue-400">
          <button className=" text-blue-400 border-2 px-6 py-1 rounded-xl border-blue-300">
        <a href="https://github.com/Jawahar665" className=" text-blue-300 ">
          GitHub Profile
        </a>
      </button>
          </li>
        </ul>
      </nav>}

      <button className="text-white border-2 px-6 py-1 rounded-xl border-blue-300 hidden md:block mx-10  ">
        <a href="https://github.com/Jawahar665" className=" text-blue-300"> 
          GitHub Profile
        </a>
      </button>
      <button onClick={()=>{
        setToggleMenu(!toggleMenu)
      }} className=" block md:hidden px-10 "  >
      < Bars3Icon className="text-white h-7"/>
      </button>
    </header>
  );
};
