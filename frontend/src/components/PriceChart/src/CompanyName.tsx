import { useAppSelector } from '@/hooks/redux';
import { selectors } from '@/store/priceHistorySlice';

const CompanyName = () => {
  const symbolInfo = useAppSelector(selectors.selectSymbolInfo);

  return <div className="priceChart__company-name">{symbolInfo}</div>;
};

export default CompanyName;
