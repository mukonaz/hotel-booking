// components/LuxuriousRooms.js
import React from 'react';
import RoomCard from './RoomCard';

const LuxuriousRooms = () => {
  const rooms = [
    { name: "Room 1", img: "https://via.placeholder.com/300", features: "Television set, Extra sheets, Breakfast" },
    { name: "Room 2", img: "https://via.placeholder.com/300", features: "Television set, Extra sheets, Breakfast, Fireplace" },
    { name: "Room 3", img: "https://via.placeholder.com/300", features: "Television set, Extra sheets, Breakfast, Fireplace, Console" },
  ];

  return (
    <div className="relative bg-blue-900 text-white py-10">
      <img 
        src="https://via.placeholder.com/1500x600" 
        alt="luxurious rooms background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40" 
      />
      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Luxurious Rooms</h2>
        <p className="mb-10">All rooms are designed for your comfort</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LuxuriousRooms;
