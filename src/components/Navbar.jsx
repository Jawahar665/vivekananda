import React from "react";
import { Bars3Icon } from '@heroicons/react/24/solid'


export const Navbar = () => {
  return (
    <header className=" font-display flex justify-around  py-5  bg-black">
      <a  href="#">
        <img className="h-7"src="images/Logo.png" alt="main-logo" />
      </a>
      <nav className="  hidden md:block" >
        <ul className=" flex text-white gap-12 my-1 text-lg  ">
          <li >  <a href="#">Home</a></li>
          <li> <a href="#">About</a></li>
          <li><a href="#">Projects</a> </li>
          <li> <a href="#">Skills</a> </li>
          <li><a href="#">Contact</a> </li>
        </ul>
      </nav>
      
      <nav className="block md:hidden mobile nav " >
        <ul className=" flex-col text-white gap-12 my-1 text-lg  ">
          <li >  <a href="#">Home</a></li>
          <li> <a href="#">About</a></li>
          <li><a href="#">Projects</a> </li>
          <li> <a href="#">Skills</a> </li>
          <li><a href="#">Contact</a> </li>
          <li>
          <button className="text-white border-2 px-6 py-1 rounded-xl border-blue-300">
        <a href="https://github.com/Jawahar665" className=" text-blue-300 ">
          GitHub Profile
        </a>
      </button>
          </li>
        </ul>
      </nav>

      <button className="text-white border-2 px-6 py-1 rounded-xl border-blue-300 hidden md:block">
        <a href="https://github.com/Jawahar665" className=" text-blue-300 ">
          GitHub Profile
        </a>
      </button>
      <button className=" block md:hidden "  >
      < Bars3Icon className="text-white h-7"/>
      </button>
    </header>
  );
};
