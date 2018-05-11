import React from 'react';
import {Pies, Chart, Transform} from 'rumble-charts';
import {SmallHeader, LeftText, RightBox} from '../styles.js';

const SentimentStats = (props) => {
  const sentiment = props.sentiment;
  let positiveScore = 0;
  let negativeScore = 0;
  let neutral = 0;
  // use HoF
  for (let i = 0; i < sentiment.length; i++) {
    let score = sentiment[i].score;
    if (score > 0) {
      positiveScore += score;
    } else if (score < 0) {
      negativeScore += score;
    } else {
      neutral += 1;
    }
  }

  let series = [{
    data: [ positiveScore, neutral, negativeScore ]
  }];
  // destructure
  if (props.tweetIds.length === 0) {
    return (
      <RightBox>
      <SmallHeader>Stats</SmallHeader>
      <LeftText>Analyze positive/negative sentiment</LeftText>
      </RightBox>
    );
  } else {
    return (
      <RightBox>
      <SmallHeader>Stats</SmallHeader>
      <LeftText>Positive (blue): { positiveScore }</LeftText>
      <LeftText>Neutral (gray): { neutral }</LeftText>
      <LeftText>Negative (orange): { negativeScore }</LeftText>
      <Chart width={600} height={250} series={ series }>
        <Transform method={['transpose', 'stack']}>
          <Pies combined={true} />
        </Transform>
      </Chart>
      </RightBox>
    );
  }
};

export default SentimentStats;