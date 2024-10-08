// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="relative">
      <img 
        src="https://via.placeholder.com/1500x600" 
        alt="hotel" 
        className="w-full h-[600px] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start pl-10 text-white bg-black bg-opacity-40">
        <h2 className="text-5xl font-bold">Paradise View</h2>
        <h1 className="text-4xl mt-4 font-bold">Hotel for every moment rich in emotion</h1>
        <p className="mt-4 text-xl">Every moment feels like the first time in paradise view</p>
        <div className="mt-8 flex space-x-4">
          <button className="bg-gold p-3 rounded text-white font-semibold">Book now</button>
          <button className="bg-white p-3 rounded text-black font-semibold">Take a tour</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
