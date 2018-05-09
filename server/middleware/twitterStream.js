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

tw.on('tweet', (tweet) => {
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
  axios.post('http://localhost:9200/twitter/searches', {
    data: tweet
  }).then((res) => {
    console.log('fulltweet', res);
    // console.log(res.data.text);
  }).catch((err) => {
    // console.error('posting error', err);
  });
};

// const mapTweets = function(tweet) {
//   axios.put('http://localhost:9200/twitter', {
//     mappings: {
//       doc: {
//         properties: {
//           text: {
//             type: text
//           }

//         }
//       }
//     }
//   }
// }

module.exports.tw = tw;