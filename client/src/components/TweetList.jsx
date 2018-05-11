import React from 'react';
import PropTypes from 'prop-types';
import { Tweet } from 'react-twitter-widgets';

const propTypes = {
  item: PropTypes.string,
};

const defaultProps = {
  item: null,
};

const TweetList = ({ item }) => (
  <Tweet
    tweetId={item}
    options={{
      width: '80%',
      cards: 'hidden',
      conversation: 'none',
      theme: 'light',
      align: 'left',
    }}
  />
);

TweetList.propTypes = propTypes;
TweetList.defaultProps = defaultProps;

export default TweetList;
