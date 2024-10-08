import { memo } from 'react';
import { useAppSelector } from '@/hooks/redux';

type SymbolCardTrendProps = {
  id: string;
};

const SymbolCardTrend = ({ id }: SymbolCardTrendProps) => {
  const { trend } = useAppSelector((state) => state.stocks.entities[id]);

  return (
    <>
      {trend && <span className={`symbolCard__trend symbolCard__trend--${trend.toLowerCase()}`} />}
    </>
  );
};

export default memo(SymbolCardTrend);
