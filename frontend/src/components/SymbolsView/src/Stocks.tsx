import { useState } from 'react';
import './stocks.css';
import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';

const Stocks = () => {
  const [activeSymbol, setActiveSymbol] = useState<null | string>(null);

  const handleSymbolClick = (symbolId: string) => {
    setActiveSymbol((s) => (s === symbolId ? null : symbolId));
  };

  return (
    <div className="stocks">
      <div className="stocks__item stocks__item--secondary">
        <h3>PRICE HISTORY</h3>

        <PriceChart symbolId={activeSymbol} />
      </div>

      <div className="stocks__item stocks__item--primary">
        <SymbolsGrid onSymbolClick={handleSymbolClick} />
      </div>
    </div>
  );
};

export default Stocks;
