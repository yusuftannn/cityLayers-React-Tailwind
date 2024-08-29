import React from 'react';
import { motion } from 'framer-motion';
import useAnimatedCount from '../components/useAnimatedCount'; // Adjust the import path as needed

const About = () => {
  const rounded = useAnimatedCount(1, 100, 2);
  const rounded2 = useAnimatedCount(1, 125532, 2);
  const rounded3 = useAnimatedCount(1, 356, 2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r bg-cyan-500 h-48 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-white">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Mission & Vision */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to provide comprehensive and accurate information to everyone who wants to explore the mysteries and beauties of cities around the world. We aim to be a reliable source of information for travelers.
            </p>
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to be one of the most visited travel platforms, enriching our users' experiences and making their discoveries unforgettable.
            </p>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Yusuf TAN</h3>
              <p className="text-gray-500">Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Ayşe Yılmaz</h3>
              <p className="text-gray-500">Marketing Director</p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Mehmet Demir</h3>
              <p className="text-gray-500">Technical Lead</p>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                🌟
              </div>
              <p className="text-gray-600">Quality</p>
              <motion.div className="text-gray-800 text-lg font-semibold pl-5">{rounded}</motion.div>
            </div>
            {/* Value 2 */}
            <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                🤝
              </div>
              <p className="text-gray-600">Trust</p>
              <motion.div className="text-gray-800 text-lg font-semibold pl-5">{rounded2}</motion.div>
            </div>
            {/* Value 3 */}
            <div className="flex items-center bg-white p-4 shadow-md rounded-lg">
              <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-full mr-4">
                🌍
              </div>
              <p className="text-gray-600">Diversity</p>
              <motion.div className="text-gray-800 text-lg font-semibold pl-5">{rounded3}</motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
