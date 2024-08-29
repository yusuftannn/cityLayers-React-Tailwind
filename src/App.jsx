import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Favorites from './pages/Favorites';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About-Us';
import Contact from './pages/Contact';
import EventCalendar from './components/EventCalendar';
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
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/city-details/:cityId" element={<CityDetailLoader />} />
            <Route path="/eventform" element={<EventCalendar />} />
          </Routes>
          <Footer />
        </div>
      </FavoritesProvider>
    </Router>
  );
}

export default App;
