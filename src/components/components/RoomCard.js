// components/RoomCard.js
import React from 'react';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
      <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold">{room.name}</h3>
        <p className="mt-2 text-gray-700">{room.features}</p>
        <p className="mt-2 text-green-500">Available</p>
      </div>
    </div>
  );
};

export default RoomCard;
