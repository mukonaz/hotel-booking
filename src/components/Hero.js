// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <img 
        src="https://via.placeholder.com/1500x600" 
        alt="hotel" 
        className="w-full h-[500px] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold">Discover Extraordinary Comfort in Hotels</h1>
      </div>
    </div>
  );
};

export default Hero;
