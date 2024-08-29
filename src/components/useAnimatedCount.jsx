import { useEffect } from 'react';
import { useMotionValue, useTransform, animate } from 'framer-motion';

const useAnimatedCount = (initialValue, targetValue, duration = 2) => {
  const count = useMotionValue(initialValue);
  const rounded = useTransform(count, latest => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, targetValue, { duration });

    return () => controls.stop();
  }, [count, targetValue, duration]);

  return rounded;
};

export default useAnimatedCount; // Burada default olarak export ediyoruz
