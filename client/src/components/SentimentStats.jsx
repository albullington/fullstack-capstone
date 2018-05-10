import React from 'react';
import {Pies, Chart, Transform} from 'rumble-charts';
import {SmallHeader, Text, RightBox} from '../styles.js';

const SentimentStats = (props) => {
  const series = [{
    data: [1, 2, 4]
  }];

  return (
    <RightBox>
    <SmallHeader>Stats</SmallHeader>
    <Chart width={600} height={250} series={series}>
      <Transform method={['transpose', 'stack']}>
        <Pies combined={true} />
      </Transform>
    </Chart>
    </RightBox>
  );
};

export default SentimentStats;