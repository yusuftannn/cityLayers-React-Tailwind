export const fetchCities  = async () => {
    try {
      const response = await fetch('../src/data/cities.json');
      if (!response.ok) {
        throw new Error('Veri çekme hatası: ' + response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Veri çekme hatası:', error);
      return []; 
    }
  };
  