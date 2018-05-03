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
  track: ['mango'], 
  stall_warnings: true
});
 
Twitter.pipe(fs.createWriteStream('tweets.json'));