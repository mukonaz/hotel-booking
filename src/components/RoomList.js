import React from 'react';
import { useNavigate } from 'react-router-dom';

const RoomList = () => {
  const navigate = useNavigate();

  // Example room data (replace with actual data)
  const rooms = [
    { id: 1, type: "Single", number: "101", floor: "1", image: "path-to-room-image.jpg" },
    { id: 2, type: "Double", number: "102", floor: "1", image: "path-to-room-image.jpg" },
    { id: 3, type: "Suite", number: "201", floor: "2", image: "path-to-room-image.jpg" },
    { id: 4, type: "Suite", number: "202", floor: "2", image: "path-to-room-image.jpg" }
  ];

  const handleEdit = (id) => {
    // Handle edit logic here
  };

  const handleDelete = (id) => {
    // Handle delete logic here
  };

  return (
    <div className="bg-blue-100 min-h-screen p-4">
      <div className="bg-brown-600 text-white p-3 rounded-t-lg flex items-center">
        <button onClick={() => navigate(-1)} className="text-2xl mr-3">{'<'}</button>
        <span className="font-semibold">Room List</span>
      </div>

      <div className="bg-cover bg-no-repeat bg-center min-h-screen" style={{ backgroundImage: 'url(path-to-background-image.jpg)' }}>
        <div className="p-4">
          {rooms.map((room) => (
            <div key={room.id} className="bg-brown-500 text-white rounded-lg flex items-center mb-4 p-4 shadow-md">
              <img
                src={room.image}
                alt="Room"
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div className="flex-1">
                <h3 className="font-bold">Room Type: {room.type}</h3>
                <p>Room Number: {room.number}</p>
                <p>Floor Number: {room.floor}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(room.id)} className="bg-white p-2 rounded-full">
                  <img src="path-to-edit-icon.png" alt="Edit" className="h-6 w-6" />
                </button>
                <button onClick={() => handleDelete(room.id)} className="bg-white p-2 rounded-full">
                  <img src="path-to-delete-icon.png" alt="Delete" className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomList;
