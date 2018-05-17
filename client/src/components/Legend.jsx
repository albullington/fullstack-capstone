import React from 'react';
import DiscreteColorLegend from 'react-vis';

const Legend = () => {
  const ITEMS = [
    'Positive',
    'Negative/neutral',
  ];

  return (
    <DiscreteColorLegend
      height={200}
      width={300}
      items={ITEMS}
    />
  );
};

export default Legend;
