import React from 'react';
import PropTypes from 'prop-types';
import TweetList from './TweetList.jsx';
import { SmallHeader, LeftText, LeftBox } from '../styles';

const propTypes = {
  tweetIds: PropTypes.arrayOf(PropTypes.string),
  query: PropTypes.string,
};

const defaultProps = {
  tweetIds: [],
  query: '',
};

const Stream = ({ tweetIds, query }) => {
  const tweetList = tweetIds.map(tweet =>
    <TweetList key={tweet.toString()} item={tweet} />);

  return (
    <LeftBox>
      <SmallHeader>Recent Related Tweets</SmallHeader>
      <LeftText>Enter your search term above</LeftText>
      { tweetIds.length > 0 && query.length >= 1 ? (
        <ul>{tweetList}</ul>
  ) : (
    <LeftText>No results found</LeftText>
    )}
    </LeftBox>
  );
};

Stream.propTypes = propTypes;
Stream.defaultProps = defaultProps;

export default Stream;
