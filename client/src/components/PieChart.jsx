import React from 'react';
import { RadialChart } from 'react-vis';

const PieChart = ({ series }) => {

return (
  <RadialChart
    data={series}
    width={300}
    height={300} 
  />
  );
}


export default PieChart;
