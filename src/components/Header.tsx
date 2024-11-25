import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { TbSteeringWheel } from 'react-icons/tb';

const Header = () => {
  return (
    <header className="header bg-blue-500 text-white py-2 px-4 flex justify-between items-center">
      {/* Logo with Steering Wheel */}
      <div className="logo flex items-center gap-1">
       
        <h1 className="text-md font-bold">
          <span className="text from bg-blue-400 to bg-blue-800">Drive</span>
          <span className="text-yellow-400">Line</span>
          <TbSteeringWheel className="text-white text-lg" />
        </h1>
      </div>
      
      {/* Navigation Links */}
      <nav className="flex items-center gap-4 text-sm">
        <Link href="/" className="hover:text-yellow-400">Home</Link>
        <Link href="/about" className="hover:text-yellow-400">About</Link>
        <Link href="/cars" className="hover:text-yellow-400">Cars</Link>
        <Link href="/blogs" className="hover:text-yellow-400">Blogs</Link>
        <Link href="/contact" className="hover:text-yellow-400">Contact</Link>
        
        {/* Shopping Cart Icon */}
        <FaShoppingCart className="text-white text-lg hover:text-yellow-400" />
      </nav>
    </header>
  );
};

export default Header;

