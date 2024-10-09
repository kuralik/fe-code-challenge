import { memo } from 'react';

type SymbolCardPriceProps = {
  price: number;
};

const SymbolCardPrice = ({ price }: SymbolCardPriceProps) => {
  return (
    <p className="symbolCard__price">
      Price: <strong>{price ? `$${Math.trunc(price)}` : '--'} </strong>
    </p>
  );
};

export default memo(SymbolCardPrice);
