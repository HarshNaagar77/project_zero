import React from 'react';
import logo from '../assets/logo.png'

function Header() {
  return (
    <header className="bg-black p-4 fixed w-full mt-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white font-bold text-xl ">
          Logo
        </div> */}
        <div>
          <img src={logo} alt="logo" className="w-[50px] h-[50px]"/>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex ml-[30vw]  justify-between" >
          <a href="#" className="text-white hover:text-gray-300">Home</a>
          <a href="#" className="text-white hover:text-gray-300">Shop</a>
          <a href="#" className="text-white hover:text-gray-300">About</a>
        </nav>

        {/* Empty div to balance flex layout */}
        <div className="w-1/4"></div>
      </div>
    </header>
  );
}

export default Header;


