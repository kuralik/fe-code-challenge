import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { selectActiveSymbol } from '@/store/dashboardOptionsSlice';
import { fetchPriceHistory } from '@/store/priceHistorySlice';
import PriceChartInner from './src/PriceChartInner';
import './priceChart.css';

const PriceChart = () => {
  const symbolId = useAppSelector(selectActiveSymbol);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (symbolId) {
      dispatch(fetchPriceHistory(symbolId));
    }
  }, [symbolId]);

  return (
    <div className="priceChart">
      <h3 className="priceChart__title">Price history</h3>

      <div className="priceChart__inner">
        {symbolId && <PriceChartInner />}

        {!symbolId && <p>Select stock</p>}
      </div>
    </div>
  );
};

export default PriceChart;
