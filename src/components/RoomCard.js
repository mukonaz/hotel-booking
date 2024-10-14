import React, { useState } from 'react';

const AddNewRoom = () => {
  const [roomType, setRoomType] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  const [rent, setRent] = useState('');
  const [roomImages, setRoomImages] = useState([null, null, null]);

  const handleFileChange = (index, event) => {
    const newImages = [...roomImages];
    newImages[index] = event.target.files[0];
    setRoomImages(newImages);
  };

  const handleSubmit = () => {
    // Handle form submission logic here
  };

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-6 px-4">
      <div className="bg-brown-600 text-white w-full max-w-lg p-3 rounded-t-lg flex items-center">
        <button className="text-2xl mr-3">{'<'}</button>
        <span className="font-semibold">Add New Room</span>
      </div>
      <form className="bg-gray-50 w-full max-w-lg p-6 rounded-b-lg shadow-md">
        <div className="mb-4">
          <label className="block font-semibold mb-1">Room Type</label>
          <select
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
            className="w-full p-2 bg-brown-600 text-white rounded"
          >
            <option value="">Select room type</option>
            <option value="Single">Single</option>
            <option value="Double">Double</option>
            <option value="Suite">Suite</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Room Number:</label>
          <input
            type="text"
            value={roomNumber}
            onChange={(e) => setRoomNumber(e.target.value)}
            placeholder="Type here room number"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-1">Rent:</label>
          <input
            type="text"
            value={rent}
            onChange={(e) => setRent(e.target.value)}
            placeholder="Type here Amount"
            className="w-full p-2 border rounded"
          />
        </div>
        {[0, 1, 2].map((index) => (
          <div key={index} className="mb-4">
            <label className="block font-semibold mb-1">Upload Room Image{index + 1}</label>
            <div className="flex items-center">
              <input
                type="file"
                onChange={(e) => handleFileChange(index, e)}
                className="w-full p-2 border rounded"
              />
              <button className="ml-2 bg-brown-600 text-white p-2 rounded">
                <img src="path-to-upload-icon.png" alt="Upload" className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
        <div className="mt-6 text-center">
          <button
            onClick={handleSubmit}
            className="bg-brown-600 text-white py-2 px-6 rounded-full font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewRoom;
