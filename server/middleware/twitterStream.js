const Twitter = require('node-tweet-stream');

const { storeTweet } = require('../helpers/parseData');
const {
  consumerKey,
  accessToken,
  accessSecret,
  consumerSecret,
} = require('../../config/apikeys');

const tw = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: accessToken,
  token_secret: accessSecret,
});

// const searchQuery = 't' || '';
// tw.track(searchQuery);
// tw.track('a');
// tw.track('e');

tw.on('tweet', (tweet) => {
  storeTweet(tweet);
}).on('error', (err) => {
  console.log('streaming error', err);
}).on('end', () => {
  console.log('end of stream');
});

module.exports.tw = tw;
