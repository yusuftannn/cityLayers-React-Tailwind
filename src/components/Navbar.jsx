import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHeart, FaRegTrashAlt     } from 'react-icons/fa';
import { useFavorites } from '../context/FavoritesContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { favorites, removeFromFavorites, clearFavorites } = useFavorites();
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">
          <Link to="/">City Layers</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/favorites" className="text-gray-300 hover:text-white">
          Favorite Events
          </Link>
          <Link to="/eventform" className="text-gray-300 hover:text-white">
          Create Event
          </Link>
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-gray-300 hover:text-white"
            >
              <FaHeart className="h-3 w-3" />
              <span className="ml-2"> ({favorites.length})</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                {favorites.length === 0 ? (
                  <p className="px-4 py-2 text-sm text-gray-500">Favorites Empty</p>
                ) : (
                  <ul>
                    {favorites.map((city) => (
                      <li key={city.id} className="px-4 py-2 border-b flex justify-between items-center">
                        <span className="text-sm">{city.name}</span>
                        <button
                          onClick={() => removeFromFavorites(city.id)}
                          className="text-red-600 text-sm"
                        >
                          <FaRegTrashAlt className="h-3 w-4"  />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="px-4 py-2 flex justify-between space-x-2">
                  <Link
                    to="/favorites"
                    className="text-blue-500 hover:text-blue-700 text-sm"
                  >
                    View Favorites
                  </Link>
                  <button
                    onClick={clearFavorites}
                    className="text-red-600 hover:text-red-800 text-sm"
                  >
                    Remove All
                  </button>
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
              Home
            </Link>
            <Link to="/favorites" className="text-gray-300 hover:text-white">
            Favorite Events
            </Link>
            <Link to="/eventform" className="text-gray-300 hover:text-white">
              Create Event
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
