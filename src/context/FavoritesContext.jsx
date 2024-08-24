import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCities } from '../data/connection';


const FavoritesContext = createContext();

// Favoriler hook'u
export const useFavorites = () => {
  return useContext(FavoritesContext);
};

// Favoriler sağlayıcısı
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      try {
        const citiesData = await fetchCities();
        setCities(citiesData);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    getCities();
  }, []);

  // Favorilere ekleme fonksiyonu
  const addToFavorites = (cityId) => {
    const city = cities.find((c) => c.id === cityId);
    if (city) {
      setFavorites((prevFavorites) => {
        const isAlreadyFavorite = prevFavorites.some((favCity) => favCity.id === city.id);
        if (!isAlreadyFavorite) {
          return [...prevFavorites, city];
        }
        return prevFavorites;
      });
    }
  };
  

  // Detay sayfasına yönlendirme fonksiyonu
  const seeInDetail = (cityId, navigate) => {
    navigate(`/city-details/${cityId}`);
  };

 // Favorilerden çıkarma fonksiyonu
const removeFromFavorites = (cityId) => {
  setFavorites((prevFavorites) =>
    prevFavorites.filter((city) => city.id !== cityId)
  );
};

  // Tüm favorileri temizleme fonksiyonu
  const clearFavorites = () => {
    setFavorites([]);
  };

  
  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, seeInDetail, removeFromFavorites, clearFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
