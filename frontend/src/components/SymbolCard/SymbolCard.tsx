import { memo } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { updateActiveSymbol } from '@/store/dashboardOptionsSlice';
import ListItem from '@/components/ListItem';
import './symbolCard.css';

type SymbolCardProps = {
  id: string;
  price: number;
};

const Icon = <CompanyIcon />;

const SymbolCard = ({ id, price }: SymbolCardProps) => {
  const { trend, companyName } = useAppSelector((state) => state.stocks.entities[id]);

  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(updateActiveSymbol(id));
  };

  return (
    <div onClick={onClick} className="symbolCard">
      <div>
        {id} - {trend}
      </div>
      <div>Price:</div>
      <div>{price || '--'} </div>

      <ListItem Icon={Icon} label={companyName} />
    </div>
  );
};
export default memo(SymbolCard);
