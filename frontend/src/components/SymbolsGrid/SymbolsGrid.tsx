import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import SymbolCard from '../SymbolCard';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';

const SymbolsGrid = () => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);

  const prices = useAppSelector((state) => state.prices);

  const dispatch = useAppDispatch();

  const isFetchedRef = useRef(false);

  useEffect(() => {
    if (!isFetchedRef.current) {
      isFetchedRef.current = true;

      dispatch(fetchAllStocks());
    }
  }, [dispatch, fetchAllStocks]);

  return (
    <div>
      {stockSymbols.map((id) => (
        <SymbolCard key={id} id={id} price={prices[id]} />
      ))}
    </div>
  );
};

export default SymbolsGrid;
