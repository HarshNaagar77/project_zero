import React from 'react';
import logo from '../assets/logo2.png'
import About from "./About"

function Header() {
  
  return (
    <header className="bg-transparent p-4 fixed w-full mt-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white font-bold text-xl ">
          Logo
        </div> */}
        <div>
          <img src={logo} alt="logo" className="w-[50px] h-[50px] rounded-xl"/>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex ml-[30vw]  justify-between" >
          <a href="#" className=" hover:border-b-black transition-all">Home</a>
          <a href="#" className=" hover:border-b-black transition-all">Shop</a>
          <a href="/About" className=" hover:border-b-black transition-all">About</a>
        </nav>

        {/* Empty div to balance flex layout */}
        <div className="w-1/4"></div>
      </div>
    </header>
  );
}

export default Header;


