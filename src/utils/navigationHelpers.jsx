import { useNavigate } from 'react-router-dom';

export const useSeeInDetail = () => {
  const navigate = useNavigate();

  const seeInDetail = (city) => {
    navigate(`/city-details/${city.id}`);
  };

  return { seeInDetail };
};
