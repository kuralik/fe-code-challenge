import { memo } from 'react';
import { useAppSelector } from '@/hooks/redux';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import List from '@/components/List';
import formatMarketCap from './formatMarketCap';

type SymbolCardDescriptionProps = {
  id: string;
};

const SymbolCardDescription = ({ id }: SymbolCardDescriptionProps) => {
  const { companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);

  const items = [
    { Icon: CompanyIcon, label: companyName },
    { Icon: IndustryIcon, label: industry },
    { Icon: MarketCapIcon, label: formatMarketCap(marketCap) }
  ];

  return <List items={items} className="symbolCard__description" />;
};

export default memo(SymbolCardDescription);
