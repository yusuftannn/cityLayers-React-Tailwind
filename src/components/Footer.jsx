import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h1 className="text-xl font-bold">City Layers</h1>
            <p className="text-sm">© 2024 Yusuf TAN. All rights reserved.</p>
          </div>
          <div className="flex space-x-6">
          <a href="/" className="text-gray-400 hover:text-white">Home</a>
            <a href="/about-us" className="text-gray-400 hover:text-white">About Us</a>
            
            <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-4 border-t border-gray-800 pt-4">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaGithub className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
