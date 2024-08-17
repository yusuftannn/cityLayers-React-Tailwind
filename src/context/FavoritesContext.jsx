// src/context/FavoritesContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (city) => {
    setFavorites((prevFavorites) => [...prevFavorites, city]);
  };

  const removeFromFavorites = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((city) => city.name !== name)
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
