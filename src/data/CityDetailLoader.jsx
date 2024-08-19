import React, { Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';

const cityComponents = {
  kocaeli: lazy(() => import('../data/citiesDetail/Kocaeli')),
  istanbul: lazy(() => import('../data/citiesDetail/İstanbul')),
  bursa: lazy(() => import('../data/citiesDetail/Bursa')),
  ankara: lazy(() => import('../data/citiesDetail/Ankara')),
  izmir: lazy(() => import('../data/citiesDetail/İzmir')),
};

const CityDetailLoader = () => {
  const { cityName } = useParams();
  const CityComponent = cityComponents[cityName];

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
