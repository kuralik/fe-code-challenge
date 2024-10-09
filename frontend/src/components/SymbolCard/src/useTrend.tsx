import { useEffect, useRef, useState } from 'react';

const useTrend = (price: number) => {
  const prevPriceRef = useRef<number | null>(null);

  const [trendModifier, setTrendModifier] = useState<string>('');

  useEffect(() => {
    const prevPrice = prevPriceRef.current;

    const newModifier =
      !prevPrice || prevPrice === price
        ? ''
        : price > prevPrice
        ? 'symbolCard--up'
        : 'symbolCard--down';

    setTrendModifier(newModifier);

    const timeout = setTimeout(() => {
      setTrendModifier('');
    }, 1000);

    prevPriceRef.current = price;

    return () => clearTimeout(timeout);
  }, [price]);

  return { trendModifier };
};

export default useTrend;
