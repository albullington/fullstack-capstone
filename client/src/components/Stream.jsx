import React from 'react';
import TweetList from './TweetList.jsx';

const Stream = (props) => {
  const tweetIds = props.tweetIds;
  const tweetList = tweetIds.map((tweet) => 
    <TweetList key={tweet.toString()} item={tweet}/>
  );
  console.log(tweetList);

  return (
    <div>
      <h4>Recent Related Tweets</h4>
      <ul>{tweetList}</ul>
    </div>
  );
};

export default Stream;