// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Sepet ikonu
import { useFavorites } from '../context/FavoritesContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <nav className="bg-gray-800 p-4 w-full ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">City Layers</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-300 hover:text-white">
            Ana Sayfa
          </Link>
          <Link to="/favorites" className="text-gray-300 hover:text-white">
            Favori Etkinlikler
          </Link>
          <Link to="/create-event" className="text-gray-300 hover:text-white">
            Yeni Etkinlik Oluştur
          </Link>
          {/* Dropdown Sepet */}
          <div className="relative z-50">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaShoppingCart className="h-6 w-6" />
              <span className="ml-2">Sepet ({favorites.length})</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                {favorites.length === 0 ? (
                  <p className="px-4 py-2 text-sm text-gray-500">Sepet boş</p>
                ) : (
                  <ul>
                    {favorites.map((city) => (
                      <li key={city.name} className="px-4 py-2 border-b flex justify-between items-center">
                        <span className="text-sm">{city.name}</span>
                        <button
                          onClick={() => removeFromFavorites(city.name)}
                          className="text-red-600 text-sm"
                        >
                          Kaldır
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="px-4 py-2">
                  <Link
                    to="/favorites"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    Favorileri Görüntüle
                  </Link>
                </div>
              </div>
            )}
          </div>
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
