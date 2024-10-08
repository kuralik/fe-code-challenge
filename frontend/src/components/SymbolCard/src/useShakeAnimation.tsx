import { useEffect, useRef, useState } from 'react';

const useShakeAnimation = (price: number) => {
  const prevPriceRef = useRef<number | null>(null);

  const [shakeModifier, setShakeModifier] = useState<string>('');

  useEffect(() => {
    const prevPrice = prevPriceRef.current;

    const priceChange = prevPrice !== null ? Math.abs(price - prevPrice) : 0;

    if (prevPrice !== null && priceChange >= prevPrice * 0.25) {
      setShakeModifier('symbolCard--animation--shake');

      const shakeTimeout = setTimeout(() => {
        setShakeModifier('');
      }, 1000);

      return () => clearTimeout(shakeTimeout);
    }

    prevPriceRef.current = price;
  }, [price]);

  return { shakeModifier };
};

export default useShakeAnimation;
