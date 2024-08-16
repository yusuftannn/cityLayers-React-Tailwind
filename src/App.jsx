import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EventDetail from './pages/EventDetail';
import CreateEvent from './pages/CreateEvent';
import Favorites from './pages/Favorites';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer/> 
      </div>
    </Router>
    
  );
}

export default App;
