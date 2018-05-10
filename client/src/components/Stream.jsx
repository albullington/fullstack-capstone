import React from 'react';
import TweetList from './TweetList.jsx';
import {SmallHeader, Text, LeftBox} from '../styles.js';

const Stream = (props) => {
  const tweetIds = props.tweetIds;
  const tweetList = tweetIds.map((tweet) => 
    <TweetList key={tweet.toString()} item={tweet}/>
  );

  if (tweetIds.length === 0 && props.query === '') {
    return (
      <LeftBox>
      <SmallHeader>Recent Related Tweets</SmallHeader>
        <Text>Enter your search term above</Text>
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
        <Text>No results found</Text>
      </LeftBox>
    );
  }
};

export default Stream;