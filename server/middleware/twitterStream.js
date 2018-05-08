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

let searchQuery = 'a' || '';
tw.track(searchQuery);
tw.on('tweet', (tweet) => {
  let analysis = analyzeTweet(tweet.text);
  tweet['sentiment'] = analysis;
  axios.post('http://localhost:9200/tweets/kittens', {
    data: tweet
  }).then((res) => {
    console.log('fulltweet', res);
  }).catch((err) => {
    // console.error(err);
  });
});

const analyzeTweet = function(text) {
  const sentiment = new Sentiment();
  const analysis = sentiment.analyze(text);
  const analysisResult = {
    score: analysis.score, 
    comparative: analysis.comparative,
    positive: analysis.positive,
    negative: analysis.negative
  };
  return analysisResult;
};

module.exports.tw = tw;