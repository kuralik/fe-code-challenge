import React, { memo } from 'react';
import ListItem from '../ListItem';

type ListProps = {
  items: {
    Icon: React.ElementType;
    label: string;
  }[];
  className?: string;
};

const List = ({ items, className }: ListProps) => (
  <div className={`list ${className}`}>
    {items.map(({ Icon, label }) => (
      <ListItem Icon={<Icon />} label={label} spacing="space-between" key={label} />
    ))}
  </div>
);

export default memo(List);
