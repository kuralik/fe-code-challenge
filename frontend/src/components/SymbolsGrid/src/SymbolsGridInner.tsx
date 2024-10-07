import { useAppSelector } from '@/hooks/redux';
import SymbolCard from '../../SymbolCard';

type SymbolsGridInnerProps = {
  stockSymbols: string[];
};

const SymbolsGridInner = ({ stockSymbols }: SymbolsGridInnerProps) => {
  const prices = useAppSelector((state) => state.prices);

  return (
    <>
      {stockSymbols?.map((id) => (
        <SymbolCard key={id} id={id} price={prices[id]} />
      ))}
    </>
  );
};

export default SymbolsGridInner;
