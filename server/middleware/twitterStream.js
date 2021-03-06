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

tw.on('tweet', (tweet) => { storeTweet(tweet); });

module.exports.tw = tw;
