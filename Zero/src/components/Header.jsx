import React from 'react';

function Header() {
  return (
    <header className="bg-zinc-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          Logo
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 flex ml-[40vh]  justify-center space-x-4">
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


