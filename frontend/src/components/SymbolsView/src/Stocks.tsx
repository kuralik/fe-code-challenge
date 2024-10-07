import './stocks.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';

const Stocks = () => (
  <div className="stocks">
    <div className="stocks__item stocks__item--secondary">
      <PriceChart />
    </div>

    <div className="stocks__item stocks__item--primary">
      <SymbolsGrid />
    </div>
  </div>
);

export default Stocks;
