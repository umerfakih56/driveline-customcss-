import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { TbSteeringWheel } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="header bg-blue-500 text-white py-2 px-4 flex justify-between items-center">
      {/* Logo with Steering Wheel */}
      <div className="logo flex items-center gap-2">
        <h1 className="text-lg font-bold flex items-center">
          <span className="text-white bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">Drive</span>
          <span className="text-yellow-400">Line</span>
          <TbSteeringWheel className="text-white text-2xl ml-2" />
        </h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex items-center gap-6 text-sm">
        <Link href="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-yellow-400 transition duration-300">About</Link>
        <Link href="/cars" className="hover:text-yellow-400 transition duration-300">Cars</Link>
        <Link href="/blogs" className="hover:text-yellow-400 transition duration-300">Blogs</Link>
        <Link href="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
        
        {/* Shopping Cart Icon */}
        <div className="relative">
          <FaShoppingCart className="text-white text-xl hover:text-yellow-400 cursor-pointer transition duration-300" />
          {/* Cart Badge (Optional) */}
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-1">3</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
