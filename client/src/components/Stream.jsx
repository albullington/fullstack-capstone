import React from 'react';
import TweetList from './TweetList.jsx';
import {SmallHeader, LeftText, LeftBox} from '../styles.js';

const Stream = (props) => {
  // destructure
  const tweetIds = props.tweetIds;
  const tweetList = tweetIds.map((tweet) => 
    <TweetList key={tweet.toString()} item={tweet}/>
  );

  if (tweetIds.length === 0 && props.query === '') {
    return (
      <LeftBox>
      <SmallHeader>Recent Related Tweets</SmallHeader>
        <LeftText>Enter your search term above</LeftText>
      </LeftBox>
    );
  } else if (tweetIds.length !== 0) {
    return (
      <LeftBox>
      <SmallHeader>Recent Related Tweets</SmallHeader>
        <ul>{tweetList}</ul>
      </LeftBox>
    );
  } else if (tweetIds.length === 0 && props.query !== '') {
    return (
      <LeftBox>
      <SmallHeader>Recent Related Tweets</SmallHeader>
        <LeftText>No results found</LeftText>
      </LeftBox>
    );
  }
};

export default Stream;