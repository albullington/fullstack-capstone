import React from 'react';
import TweetList from './TweetList.jsx';

const Stream = (props) => {
  const tweetIds = props.tweetIds;
  const tweetList = tweetIds.map((tweet) => 
    <TweetList key={tweet.toString()} item={tweet}/>
  );

  if (tweetIds.length === 0 && props.query === '') {
    return (
      <div>
        <h4>Recent Related Tweets</h4>
        <p>Enter your search term above</p>
      </div>
    );
  } else if (tweetIds.length !== 0) {
    return (
      <div>
        <h4>Recent Related Tweets</h4>
        <ul>{tweetList}</ul>
      </div>
    );
  } else if (tweetIds.length === 0 && props.query !== '') {
    return (
      <div>
        <h4>Recent Related Tweets</h4>
        <p>No results found</p>
      </div>
    );
  }
};

export default Stream;