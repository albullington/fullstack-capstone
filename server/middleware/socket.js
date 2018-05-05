const io = require('socket.io').listen(7777);
const path = require('path');
const Twitter = require('node-tweet-stream');
const axios = require('axios');
const { consumerKey, accessToken, accessSecret, consumerSecret } = require('../../config/apikeys');

const tw = new Twitter({
  consumer_key: consumerKey,
  consumer_secret: consumerSecret,
  token: accessToken,
  token_secret: accessSecret
});

tw.track('kittens');
tw.track('mango');
tw.on('tweet', (tweet) => {
  io.emit('tweet', tweet);
  axios.post('http://localhost:9200/tweets/kittens', {
    data: tweet
  }).then((res) => {
      // console.log(res);
  }).catch((err) => {
    console.log(err);
  });
});