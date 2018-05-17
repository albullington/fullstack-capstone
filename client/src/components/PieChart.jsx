import React from 'react';
import PropTypes from 'prop-types';
import { RadialChart } from 'react-vis';

const propTypes = {
  data: PropTypes.instanceOf(Object),
};

const defaultProps = {
  data: {},
};

const PieChart = ({ data }) => {
  const {
    positive,
    zero,
    negative,
  } = data;

  const chartData = [
    { angle: positive, label: 'Positive' },
    { angle: zero, label: 'Neutral' },
    { angle: negative, label: 'Negative' },
  ];


  return (
    <RadialChart
      data={chartData}
      width={300}
      height={300}
    />
  );
};

PieChart.propTypes = propTypes;
PieChart.defaultProps = defaultProps;

export default PieChart;
