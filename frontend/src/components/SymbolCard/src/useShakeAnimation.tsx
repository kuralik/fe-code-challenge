import { useEffect, useRef, useState } from 'react';

const useShakeAnimation = (price: number, shakeThreshold = 0.25, shakeDuration = 800) => {
  const prevPriceRef = useRef<number | null>(null);

  const [shakeModifier, setShakeModifier] = useState<string>('');

  useEffect(() => {
    const prevPrice = prevPriceRef.current;

    if (prevPrice !== null) {
      const priceChange = Math.abs(price - prevPrice);

      if (priceChange >= prevPrice * shakeThreshold) {
        setShakeModifier('symbolCard--animation--shake');

        const shakeTimeout = setTimeout(() => {
          setShakeModifier('');
        }, shakeDuration);

        return () => clearTimeout(shakeTimeout);
      }
    }

    prevPriceRef.current = price;
  }, [price, shakeThreshold, shakeDuration]);

  return { shakeModifier };
};

export default useShakeAnimation;
