import { useAppSelector } from '@/hooks/redux';
import { selectors } from '@/store/priceHistorySlice';
import Loading from '@/components/Loading';
import CompanyName from './CompanyName';
import Chart from '../src/Chart';

const PriceChartInner = () => {
  const { loading, error } = useAppSelector(selectors.apiState);

  return (
    <>
      {loading && <Loading />}

      {error && <p>Failed to get price history!</p>}

      {!loading && !error && (
        <>
          <CompanyName />
          <Chart />
        </>
      )}
    </>
  );
};

export default PriceChartInner;
