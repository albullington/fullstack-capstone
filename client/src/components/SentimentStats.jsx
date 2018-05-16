import React from 'react';
import PropTypes from 'prop-types';
import { Pies, Chart, Transform } from 'rumble-charts';
import { SmallHeader, LeftText, RightBox } from '../styles';

const propTypes = {
  sentiment: PropTypes.arrayOf(PropTypes.object),
  tweetIds: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  sentiment: [],
  tweetIds: [],
};

const SentimentStats = ({ sentiment, tweetIds }) => {
  const {
    score,
  } = sentiment;

  let positiveScore = 0;
  let negativeScore = 0;
  let neutral = 0;

  console.log('score', sentiment);
  // sentiment.forEach((tweet) => {
  //   const score = tweet.score;
  //   console.log(tweet, 'score');
  //   if (score > 0) {
  //     positiveScore += score;
  //   } else if (score < 0) {
  //     negativeScore += score;
  //   } else {
  //     neutral += 1;
  //   }
  // });

  const series = [{
    data: [positiveScore, neutral, negativeScore],
  }];

  if (tweetIds.length === 0) {
    return (
      <RightBox>
        <SmallHeader>Stats</SmallHeader>
        <LeftText>Analyze positive/negative sentiment</LeftText>
      </RightBox>
    );
  }
  return (
    <RightBox>
      <SmallHeader>Stats</SmallHeader>
      <LeftText>Positive (blue): { positiveScore }</LeftText>
      <LeftText>Neutral (gray): { neutral }</LeftText>
      <LeftText>Negative (orange): { negativeScore }</LeftText>
      <Chart width={600} height={250} series={series}>
        <Transform method={['transpose', 'stack']}>
          <Pies combined />
        </Transform>
      </Chart>
    </RightBox>
  );
};

SentimentStats.propTypes = propTypes;
SentimentStats.defaultProps = defaultProps;

export default SentimentStats;
