import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../../SymbolCard';

type SymbolsGridInnerProps = {
  stockSymbols: string[];
  hasInfo: boolean;
};

const SymbolsGridInner = ({ stockSymbols, hasInfo }: SymbolsGridInnerProps) => {
  const prices = useAppSelector((state) => state.prices);

  return (
    <div className={`stocks__list ${hasInfo ? '' : 'stocks__list--brief'}`}>
      {stockSymbols.map((id) => (
        <SymbolCard key={id} id={id} price={prices[id]} />
      ))}
    </div>
  );
};

export default SymbolsGridInner;
