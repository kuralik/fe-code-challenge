import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectActiveSymbol, updateActiveSymbol } from '@/store/dashboardOptionsSlice';
import SymbolCardDescription from './src/SymbolCardDescription';
import SymbolCardTrend from './src/SymbolCardTrend';
import SymbolCardPrice from './src/SymbolCardPrice';
import './symbolCard.css';

type SymbolCardProps = {
  id: string;
  price: number;
};

const SymbolCard = ({ id, price }: SymbolCardProps) => {
  const symbolId = useAppSelector(selectActiveSymbol);

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(updateActiveSymbol(id));
  };

  return (
    <article
      onClick={onClick}
      className={`symbolCard ${symbolId === id ? 'symbolCard--active' : ''}`}
    >
      <h3 className="symbolCard__title">{id}</h3>

      <SymbolCardPrice price={price} />

      <SymbolCardDescription id={id} />

      <SymbolCardTrend id={id} />
    </article>
  );
};

export default memo(SymbolCard);
