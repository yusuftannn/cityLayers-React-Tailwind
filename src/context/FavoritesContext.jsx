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

  const seeInDetail = (city, navigate) => {
    navigate(`/city-details/${city.name.toLowerCase()}`);
  };

  const removeFromFavorites = (name) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((city) => city.name !== name)
    );
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, seeInDetail, removeFromFavorites, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
