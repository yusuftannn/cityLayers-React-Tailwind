import React, { useState, useEffect } from 'react';
import { fetchCities } from '../connection'; 

const Antalya = () => {
  const [city, setCity] = useState(null);

  useEffect(() => {
    const fetchCityData = async () => {
      try {
        const data = await fetchCities();
        const antalyaData = data.find((city) => city.id === 5);
        setCity(antalyaData);
      } catch (error) {
        console.error('Veri çekme hatası:', error);
      }
    };

    fetchCityData();
  }, []);

  if (!city) {
    return <div>Yükleniyor...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-64 rounded-lg shadow-md"
        style={{ backgroundImage: `url('../src/assets/images/istanbul.jpeg')` }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center text-white rounded-lg">
          <h1 className="text-4xl font-bold">{city.name}</h1>
          <p className="text-lg">{city.bölge}</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Hakkında</h2>
        <p className="text-gray-700 mt-2">{city.aciklama}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold">Nüfus</h3>
          <p className="text-gray-600">{city.nüfus}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold">Yüzölçümü</h3>
          <p className="text-gray-600">{city.yüzölçümü}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold">Bölge</h3>
          <p className="text-gray-600">{city.bölge}</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-xl font-bold">Konum</h3>
          <p className="text-gray-600">Latitude: {city.latitude}, Longitude: {city.longitude}</p>
        </div>
      </div>
    </div>
  );
};

export default Antalya;
