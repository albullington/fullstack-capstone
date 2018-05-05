import React from 'react';
import {Tweet} from 'react-twitter-widgets';

const Stream = (props) => {
  return (
    <Tweet 
      tweetId={'511181794914627584'}
      options={{
        width: 300, 
        cards: 'hidden'
      }}
    />
  );
};

export default Stream;