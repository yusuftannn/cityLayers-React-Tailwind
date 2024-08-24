import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { useSeeInDetail } from '../utils/navigationHelpers';
import Button from '../components/Buttons';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();
  const { seeInDetail } = useSeeInDetail();

  return (
    <div className="relative">
      {favorites.length === 0 ? (
        <p className="px-4 py-2 text-sm text-gray-500">Favorilediğiniz Şehir Bulunmamaktadır.</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 rounded-md shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left border-b">
              <th className="px-4 py-2">Şehir Adı</th>
              <th className="px-4 py-2">Şehir Nüfus</th>
              <th className="px-4 py-2">Şehir Yüzölçümü</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((city) => (
              <tr key={city.id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">{city.name}</td>
                <td className="px-4 py-2">{city.nüfus}</td>
                <td className="px-4 py-2">{city.yüzölçümü}</td>
                <td className="px-4 py-2 text-center">
                  <div className="flex gap-2 justify-center">
                    <Button
                      label="Kaldır"
                      variant="remove"
                      onClick={() => removeFromFavorites(city.id)}
                    />
                    <Button
                      label="Detaylı Gör"
                      variant="details"
                      onClick={() => seeInDetail(city)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Favorites;
