// src/context/FavoritesContext.jsx
import React, { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addToFavorites = (city) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(favCity => favCity.name === city.name);
      if (!isAlreadyFavorite) {
        return [...prevFavorites, city];
      }
      return prevFavorites;
    });
  };

  const removeFromFavorites = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((city) => city.name !== name)
    );
  };

  // Tüm favorileri kaldır
  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
