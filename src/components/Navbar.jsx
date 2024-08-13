import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">City Layers</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link to="/favorites" className="text-gray-300 hover:text-white">
            Favori Etkinlikler
          </Link>
          <Link to="/create-event" className="text-gray-300 hover:text-white">
            Yeni Etkinlik Oluştur
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="container mx-auto flex flex-col space-y-2 mt-4">
            <Link to="/" className="text-gray-300 hover:text-white">
              Ana Sayfa
            </Link>
            <Link to="/favorites" className="text-gray-300 hover:text-white">
              Favori Etkinlikler
            </Link>
            <Link to="/create-event" className="text-gray-300 hover:text-white">
              Yeni Etkinlik Oluştur
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
