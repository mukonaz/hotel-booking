// components/RoomCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  return (
    <div className="bg-white shadow-md rounded overflow-hidden">
      <img src={room.img} alt={room.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{room.name}</h2>
        <p className="text-gray-600">Available: {room.availability}</p>
        <p className="text-gray-900 font-bold">{room.price}</p>
        <Link to="/booking">
        <button className="bg-gold p-2 mt-4 rounded text-white w-full">Book Now</button>
      </Link>
      </div> 
    </div>
  );
};

export default RoomCard;
