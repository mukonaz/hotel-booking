// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">Hotel Logo</div>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-gray-500">Home</a></li>
          <li><a href="#" className="hover:text-gray-500">About</a></li>
          <li><a href="#" className="hover:text-gray-500">Luxurious Room</a></li>
          <li><a href="#" className="hover:text-gray-500">Rooms</a></li>
          <li><a href="#" className="hover:text-gray-500">Services</a></li>
          <li><a href="#" className="hover:text-gray-500">Pricing</a></li>
          <li><a href="#" className="hover:text-gray-500">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
