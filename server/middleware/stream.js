const TwitterStream = require('twitter-stream-api');
const fs = require('fs');
const { consumerKey, accessToken, accessSecret, consumerSecret } = require('../../config/apikeys');
 
const keys = {
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: accessToken,
  token_secret: accessSecret
};

const Twitter = new TwitterStream(keys, false);

Twitter.stream('statuses/filter', {
  track: ['kittens'], 
  stall_warnings: true
});
 
Twitter.pipe(fs.createWriteStream('tweets.json'));

// https://vpc-twitter-analytics-diiqokvxgu4fyjockq74qc53em.us-west-1.es.amazonaws.com