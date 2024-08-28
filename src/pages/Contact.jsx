import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
  const position = [39.9334, 32.8597];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r bg-cyan-500 h-48 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Contact</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Us</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  required
                />
                <input
                  type="email"
                  placeholder="E-Mail"
                  className="border border-gray-300 p-3 rounded-md w-full"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="border border-gray-300 p-3 rounded-md w-full"
                required
              />
              <textarea
                placeholder="Your Message"
                className="border border-gray-300 p-3 rounded-md w-full h-32 resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-500 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Contact Information</h2>
            <p className="text-gray-600 mb-2">
              <strong>Adress:</strong> 1234 City, Country
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Phone:</strong> +90 123 456 7890
            </p>
            <p className="text-gray-600">
              <strong>E-mail:</strong> info@example.com
            </p>
          </div>
        </div>

        {/* Leaflet Map Section */}
        <div className="h-96 mt-16">
          <MapContainer center={position} zoom={13} className="h-full rounded-md shadow-md">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>
                Şirketimiz burada! <br /> Bizi ziyaret edin.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;
