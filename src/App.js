import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Navbar from './components/components/Navbar';
import Hero from './components/Hero';
import Hero from './components/components/Hero';
import SearchBar from './components/SearchBar';
import SearchBar from './components/components/SearchBar';
import RoomList from './components/RoomList';


function App() {
  return (
    <Router>
      <Routes>
        <div className="font-sans">
      <Navbar />
      <Hero />
      <SearchBar />
      <RoomList />
    </div>
      </Routes>
    
    </Router>
 
  );
}

export default App;
