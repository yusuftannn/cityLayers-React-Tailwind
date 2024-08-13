import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../assets/Home.css'; // Özel stil dosyası

// Türkiye'nin en yüksek nüfuslu 10 ili
const cities = [
  { name: 'İstanbul', latitude: 41.0082, longitude: 28.9784, nüfus: '15.66 milyon' },
  { name: 'Ankara', latitude: 39.9334, longitude: 32.8597, nüfus: '5.80 milyon' },
  { name: 'İzmir', latitude: 38.4237, longitude: 27.1428, nüfus: '4.48 milyon' },
  { name: 'Bursa', latitude: 40.1826, longitude: 29.0661, nüfus: '3.21 milyon' },
  { name: 'Antalya', latitude: 36.8969, longitude: 30.7133, nüfus: '2.70 milyon' },
  { name: 'Konya', latitude: 37.8774, longitude: 32.4790, nüfus: '2.32 milyon' },
  { name: 'Adana', latitude: 37.0017, longitude: 35.3213, nüfus: '2.27 milyon' },
  { name: 'Şanlıurfa', latitude: 37.1662, longitude: 38.7833, nüfus: '2.21 milyon' },
  { name: 'Gaziantep', latitude: 37.0662, longitude: 37.3833, nüfus: '2.16 milyon' },
  { name: 'Kocaeli', latitude: 40.8333, longitude: 29.9167, nüfus: '2.10 milyon' }
];

const Home = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <div className="home-container">
      <header className="header bg-blue-600 p-4 text-center text-white font-bold text-xl">
        Türkiye Haritası
      </header>
      {selectedCity && (
        <div className="city-info p-4 mt-4 border border-gray-300 rounded bg-white shadow-md">
          <h2 className="text-xl font-bold">{selectedCity.name}</h2>
          <p className="text-lg">Nüfus: {selectedCity.nüfus}</p>
        </div>
      )}
      <div className="map-container">
        <MapContainer
          center={[39.9334, 32.8597]} // Türkiye'nin merkez koordinatları
          zoom={6}
          style={{ height: '600px', width: '100%' }}
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
                <p>Nüfus: {city.nüfus}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      
    </div>
  );
};

export default Home;
