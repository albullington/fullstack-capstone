const Twitter = require('node-tweet-stream');
const path = require('path');
const axios = require('axios');
const Sentiment = require('sentiment');
const { consumerKey, accessToken, accessSecret, consumerSecret } = require('../../config/apikeys');

const tw = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: accessToken,
  token_secret: accessSecret
});

let searchQuery = 't' || '';
tw.track(searchQuery);
tw.track('a');
tw.track('i');

tw.on('tweet', (tweet) => {
  // move on one line
  storeTweet(tweet);
});

const analyzeTweet = function(text) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(text);
  const analysisResult = {
    score: analysis.score, 
    comparative: analysis.comparative,
    positive: analysis.positive,
    negative: analysis.negative,
  };
  return analysisResult;
};

const storeTweet = function(tweet) {
  let analysis = analyzeTweet(tweet.text);
  tweet.sentiment = analysis;
  // remove the axios library and use native JS fetch method
  axios.post('http://localhost:9200/twitter/searches', {
    data: tweet
  }).then((res) => {
    // console.log('fulltweet', res);
    // console.log(res.data.text);
  }).catch((err) => {
    // console.error('posting error', err);
  });
};

module.exports.tw = tw;