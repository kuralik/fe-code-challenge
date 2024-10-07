import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchAllStocks, selectors } from '@/store/stocksSlice';
import SymbolsGridInner from './src/SymbolsGridInner';

const SymbolsGrid = () => {
  const stockSymbols = useAppSelector(selectors.selectStockIds);

  const dispatch = useAppDispatch();

  const isFetchedRef = useRef(false);

  const hasNoStockSymbols = stockSymbols.length === 0;

  useEffect(() => {
    if (!isFetchedRef.current && hasNoStockSymbols) {
      isFetchedRef.current = true;

      dispatch(fetchAllStocks());
    }
  }, [hasNoStockSymbols]);

  const showCardInfo = useAppSelector((state) => state.store.showCardInfo);

  return (
    <div className={`stocks__list ${showCardInfo ? '' : 'stocks__list--brief'}`}>
      <SymbolsGridInner stockSymbols={stockSymbols} />
    </div>
  );
};

export default SymbolsGrid;
