import React from 'react';
import PropTypes from 'prop-types';
import PieChart from './PieChart';
import { SmallHeader, LeftText, RightBox, List } from '../styles';

const propTypes = {
  sentiment: PropTypes.arrayOf(PropTypes.object),
  tweetIds: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
  sentiment: [],
  tweetIds: [],
};

const SentimentStats = ({ sentiment, tweetIds }) => {
  let positiveScore = 0;
  let negativeScore = 0;
  let neutral = 0;

  sentiment.forEach((tweet) => {
    const score = tweet.score;
    if (score > 0) {
      positiveScore += score;
    } else if (score < 0) {
      negativeScore += score;
    } else {
      neutral += 1;
    }
  });

  const series = [positiveScore, neutral, negativeScore];

  const data = {
    positive: positiveScore,
    zero: neutral,
    negative: negativeScore,
  };

  return (
    <div>
      <RightBox>
        <SmallHeader>Stats</SmallHeader>
        { (tweetIds.length === 0) ? (
          <LeftText>Analyze positive/negative sentiment</LeftText>
  ) : (
    <div>
      <List>Positive (light blue): { positiveScore }</List>
        <List>Negative/Neutral (dark blue): { negativeScore + neutral }</List>
          <PieChart data={data} />
    </div>
      )
      }
      </RightBox>
    </div>
  );
};

SentimentStats.propTypes = propTypes;
SentimentStats.defaultProps = defaultProps;

export default SentimentStats;
