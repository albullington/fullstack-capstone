import React from 'react';
import {Tweet} from 'react-twitter-widgets';

const TweetList = (props) => {

  return (
    <Tweet
      tweetId={props.item} 
      options={{
        width: '80%', 
        cards: 'hidden', 
        conversation: 'none', 
        theme: 'light', 
        align: 'left'
      }}
    />
  );
};

export default TweetList;