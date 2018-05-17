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
  const {
    score,
  } = sentiment;

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

  const series = [{
    data: [positiveScore, neutral, negativeScore],
  }];

  return (
    <div>
    <RightBox>
      <SmallHeader>Stats</SmallHeader>
      { (tweetIds.length === 0) ? (
      <LeftText>Analyze positive/negative sentiment</LeftText>
  ) : (
    <div>
    <List>Positive (blue): { positiveScore }</List>
    <List>Neutral (gray): { neutral }</List>
    <List>Negative (orange): { negativeScore }</List>
    <PieChart series={series}/>
      </div>
      )}
      </RightBox>
      </div>
  );
};

SentimentStats.propTypes = propTypes;
SentimentStats.defaultProps = defaultProps;

export default SentimentStats;
