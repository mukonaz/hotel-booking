import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg--50 min-h-screen flex items-center justify-center">
      <div className="relative bg-cover bg-center bg-no-repeat rounded-xl p-4 max-w-md w-full shadow-lg"
        style={{ backgroundImage: 'url(https://firebasestorage.googleapis.com/v0/b/hotel-app-688af.appspot.com/o/background.png?alt=media&token=696e37cb-7db0-411f-82a1-fdac0bd8f108)' }}>

        <div className="text-center mt-4">
          <div className="relative inline-block">
            <img src="path-to-profile-picture.jpg" alt="Profile" className="w-24 h-24 rounded-full border-4 border-white" />
          </div>
          <div className="text-white mt-2">
            <h2 className="font-bold text-lg">Artificial Soft</h2>
            <p>01630225-0001</p>
          </div>
        </div>

        <div className="flex justify-around mt-6">
          <button onClick={() => navigate('/newroom')} className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-688af.appspot.com/o/AddRoom.png?alt=media&token=52e98f4e-cb57-4c14-953f-bd8bb14362fe" alt="Add Room" className="h-17 w-17 mb-1" />
            <span className="text-">Add Room</span>
          </button>
          <button onClick={() => navigate('/roomlist')} className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-688af.appspot.com/o/RoomList.png?alt=media&token=b10be3e6-df3c-4ca8-95dc-7705929895cc" alt="Room List" className="h-17 w-17 mb-1" />
            <span className="text-">Room List</span>
          </button>
          <button onClick={() => navigate('/edit-room')} className="flex flex-col items-center">
            <img src="https://firebasestorage.googleapis.com/v0/b/hotel-app-688af.appspot.com/o/RoomList.png?alt=media&token=b10be3e6-df3c-4ca8-95dc-7705929895cc" alt="Edit Room" className="h-17 w-17 mb-1" />
            <span className="text-">Edit Room</span>
          </button>
        </div>

        <div className="mt-6 flex justify-center">
          <button onClick={() => navigate('/logout')} className="bg-brown-500 text-white py-2 px-6 rounded-full">
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
