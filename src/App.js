import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import RoomList from './components/RoomList';
import AdminDashboard from './components/Navbar';
import AddNewRoom from './components/RoomCard';

function App() {
  return (
    <Router>
      <Routes>
      
          <Route path='/' element={<AdminDashboard />} />
          <Route path='/admin' element={<AdminDashboard />} />
          <Route path='/newroom' element={<AddNewRoom />} />
          <Route path='/roomlist' element={<RoomList />} />
      </Routes>
    
    </Router>
 
  );
}

export default App;
