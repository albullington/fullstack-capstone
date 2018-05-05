const io = require('socket.io').listen(7777);
const path = require('path');
const Twitter = require('node-tweet-stream');
const axios = require('axios');
const Sentiment = require('sentiment');
const { consumerKey, accessToken, accessSecret, consumerSecret } = require('../../config/apikeys');

const tw = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: accessToken,
  token_secret: accessSecret
});

const sentiment = new Sentiment();

tw.track('kittens');
tw.track('mango');
tw.on('tweet', (tweet) => {
  io.emit('tweet', tweet);
  const analysis = sentiment.analyze(tweet.text);
  const analysisResult = {
    score: analysis.score, 
    comparative: analysis.comparative,
    positive: analysis.positive,
    negative: analysis.negative
  };
  // console.log(tweet.text, 'this is my tweet');
  // console.log(analysis);
  axios.post('http://localhost:9200/tweets/queries', {
    data: {
      data: tweet,
      sentiment: analysisResult
    }
  }).then((res) => {
    console.log(res);
  }).catch((err) => {
    // console.error(err);
  });
});