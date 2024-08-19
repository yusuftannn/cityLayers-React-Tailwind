import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CityDetailLoader from './data/CityDetailLoader'; 
import { FavoritesProvider } from './context/FavoritesContext';

import './App.css';

function App() {
  return (
    <Router>
      <FavoritesProvider>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/event/:id" element={<EventDetail />} />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/city-details/:cityName" element={<CityDetailLoader />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
