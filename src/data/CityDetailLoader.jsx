import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const cityComponents = {
  1: lazy(() => import('../data/citiesDetail/Istanbul')),
  2: lazy(() => import('../data/citiesDetail/Ankara')),
  3: lazy(() => import('../data/citiesDetail/Izmir')),
  4: lazy(() => import('../data/citiesDetail/Bursa')),
  5: lazy(() => import('../data/citiesDetail/Antalya')),
  6: lazy(() => import('../data/citiesDetail/Konya')),
  7: lazy(() => import('../data/citiesDetail/Adana')),
  8: lazy(() => import('../data/citiesDetail/Sanliurfa')),
  9: lazy(() => import('../data/citiesDetail/Gaziantep')),
  10: lazy(() => import('../data/citiesDetail/Kocaeli')),
};

const CityDetailLoader = () => {
  const { cityId } = useParams();
  const CityComponent = cityComponents[cityId];

  if (!CityComponent) {
    return <div>Şehir detayı bulunamadı.</div>;
  }

  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <CityComponent />
    </Suspense>
  );
};

export default CityDetailLoader;
