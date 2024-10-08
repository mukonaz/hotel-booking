// components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  return (
    <div className="bg-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center px-4">
        <select className="p-2 border border-gray-300 rounded w-full sm:w-auto">
          <option>Room type</option>
          <option>Standard</option>
          <option>Luxury</option>
        </select>
        <select className="p-2 border border-gray-300 rounded w-full sm:w-auto">
          <option>Person</option>
          <option>1</option>
          <option>2</option>
        </select>
        <input 
          type="date" 
          className="p-2 border border-gray-300 rounded w-full sm:w-auto" 
          placeholder="Check In" 
        />
        <input 
          type="date" 
          className="p-2 border border-gray-300 rounded w-full sm:w-auto" 
          placeholder="Check Out" 
        />
        <button className="bg-gold p-2 rounded text-white w-full sm:w-auto">Book Now</button>
      </div>
    </div>
  );
};

export default SearchBar;
