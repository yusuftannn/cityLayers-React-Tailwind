import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/Home.css';
import { useFavorites } from '../context/FavoritesContext';
import { useSeeInDetail } from '../utils/navigationHelpers';
import { fetchCities } from '../data/connection'; 

const Home = () => {
  const [cities, setCities] = useState([]);
  const { addToFavorites } = useFavorites();
  const { seeInDetail } = useSeeInDetail();

  useEffect(() => {
    const getCities = async () => {
      const citiesData = await fetchCities(); 
      setCities(citiesData);
    };

    getCities();
  }, []);

  return (
    <div className="home-container z-40">
      <header className="header bg-blue-600 p-4 text-center text-white font-bold text-xl">
        Türkiye Haritası
      </header>
      <div className="map-container">
        <MapContainer
          center={[39.9334, 32.8597]} // Türkiye'nin merkez koordinatları
          zoom={5}
          style={{ height: '400px', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />

          {cities.map((city) => (
            <Marker key={city.id} position={[city.latitude, city.longitude]}>
              <Popup>
                <h2 className="text-lg font-semibold">{city.name}</h2>
                <p><span className="font-bold text-red-600">Nüfus:</span> {city.nüfus}</p>
                <p><span className="font-bold text-red-600">Yüzölçümü:</span> {city.yüzölçümü}</p>
                <p><span className="font-bold text-red-600">Bölge:</span> {city.bölge}</p>
                <div className="flex justify-between mt-2">
                  <button
                    onClick={() => addToFavorites(city.id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Listeye Ekle
                  </button>
                  <button
                    onClick={() => seeInDetail(city)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    Detaylı Gör
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Home;
