import { useEffect } from 'react';
import { useAppDispatch } from '@/hooks/redux';
import { fetchPriceHistory } from '@/store/priceHistorySlice';
import PriceChartInner from './src/PriceChartInner';
import './priceChart.css';

type PriceChartProps = {
  symbolId: string | null;
};

const PriceChart = ({ symbolId }: PriceChartProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (symbolId) {
      dispatch(fetchPriceHistory(symbolId));
    }
  }, [dispatch, symbolId]);

  return (
    <div className="priceChart">
      <h3 className="priceChart__title">Price history</h3>

      {symbolId && <PriceChartInner />}

      {!symbolId && <p>Select stock</p>}
    </div>
  );
};

export default PriceChart;
