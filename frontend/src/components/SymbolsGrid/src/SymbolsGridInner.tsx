import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../../SymbolCard';
import { selectActiveSymbol } from '@/store/dashboardOptionsSlice';

type SymbolsGridInnerProps = {
  stockSymbols: string[];
  hasInfo: boolean;
};

const SymbolsGridInner = ({ stockSymbols, hasInfo }: SymbolsGridInnerProps) => {
  const prices = useAppSelector((state) => state.prices);

  const symbolId = useAppSelector(selectActiveSymbol);

  return (
    <div
      className={`stocks__list ${hasInfo ? '' : 'stocks__list--brief'}${
        symbolId ? 'stocks__list--active' : ''
      }`.trim()}
    >
      {stockSymbols.map((id) => (
        <SymbolCard key={id} id={id} price={prices[id]} />
      ))}
    </div>
  );
};

export default SymbolsGridInner;
