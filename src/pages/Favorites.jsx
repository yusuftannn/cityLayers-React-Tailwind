import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useSeeInDetail } from '../utils/navigationHelpers';
import { FaRegTrashAlt } from 'react-icons/fa';
import Button from '../components/Buttons';
import { motion, AnimatePresence } from 'framer-motion';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { seeInDetail } = useSeeInDetail();

  return (
    <div className="relative">
      {favorites.length === 0 ? (
        <p className="px-4 py-2 text-sm text-gray-500">Your favorite city is not found.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="px-4 py-2">City Name</th>
              <th className="px-4 py-2">City Population</th>
              <th className="px-4 py-2">City Area</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence>
              {favorites.map((city) => (
                <motion.tr
                  key={city.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="border-b hover:bg-gray-50"
                >
                  <td className="px-4 py-2">{city.name}</td>
                  <td className="px-4 py-2">{city.nüfus}</td>
                  <td className="px-4 py-2">{city.yüzölçümü}</td>
                  <td className="px-4 py-2 text-center">
                    <div className="flex gap-2 justify-center">
                      <Button
                        variant="remove"
                        onClick={() => removeFromFavorites(city.id)}
                      >
                        <FaRegTrashAlt />
                      </Button>
                      <Button
                        label="See Detail"
                        variant="details"
                        onClick={() => seeInDetail(city)}
                      />
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Favorites;
