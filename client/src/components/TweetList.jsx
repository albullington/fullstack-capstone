import React from 'react';
import {Tweet} from 'react-twitter-widgets';

const TweetList = (props) => {

  return (
    <Tweet
      tweetId={props.item} 
      options={{
        width: 500, 
        height: 100,
        cards: 'hidden'
      }}
    />
  );
};

export default TweetList;