import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../assets/Home.css';
import { cities } from '../data/cities';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="home-container">
      <header className="header bg-blue-600 p-4 text-center text-white font-bold text-xl">
        Türkiye Haritası
      </header>
      {/* {selectedCity && (
        <div className="city-info p-4 mt-4 border border-gray-300 rounded bg-white shadow-md">
          <h2 className="text-xl font-bold">{selectedCity.name}</h2>
          <p className="text-lg"><span className='font-bold text-red-600'>Nüfus:</span> {selectedCity.nüfus}</p>
          <p className="text-lg"><span className='font-bold text-red-600'>Yüzölçümü:</span>  {selectedCity.yüzölçümü}</p>
          <p className="text-lg"><span className='font-bold text-red-600'>Bölge:</span> {selectedCity.bölge}</p>
        </div>
      )} */}
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
            <Marker
              key={city.name}
              position={[city.latitude, city.longitude]}
              eventHandlers={{
                click: () => {
                  setSelectedCity(city);
                },
              }}
            >
              <Popup>
                <h2 className="text-lg font-semibold">{city.name}</h2>
                <p><span className='font-bold text-red-600'>Nüfus:</span> {city.nüfus}</p>
                <p><span className='font-bold text-red-600'>Yüzölçümü:</span> {city.yüzölçümü}</p>
                <p><span className='font-bold text-red-600'>Bölge:</span> {city.bölge}</p>
                <div className="flex justify-between mt-2">
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">Listeye Ekle</button>
                  <button className="bg-green-500 text-white px-2 py-1 rounded">Detaylı Gör</button>
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
