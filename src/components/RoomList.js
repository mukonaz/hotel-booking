// components/RoomList.js
import React from 'react';
import RoomCard from './RoomCard';

const RoomList = () => {
  const rooms = [
    { name: "The Royal Room", price: "R *****", availability: "Yes", img: "https://via.placeholder.com/400" },
    { name: "The Royal Room", price: "R *****", availability: "Yes", img: "https://via.placeholder.com/400" },
    { name: "The Royal Room", price: "R *****", availability: "Yes", img: "https://via.placeholder.com/400" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {rooms.map((room, index) => (
        <RoomCard key={index} room={room} />
      ))}
    </div>
  );
};

export default RoomList;
