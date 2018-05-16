const axios = require('axios');
const Sentiment = require('sentiment');

const parseData = (body) => {
  // destructure the body
  const { hits: { hits } } = body;
  const tweets = {
    tweetIds: [],
    sentiment: [],
  };

  const data = hits.map((hit) => {
    const {
      created_at,
      id_str,
      sentiment,
    } = hit._source.data;

    return [id_str, sentiment, created_at];
  });

  data.forEach((tweetArray) => {
    const [
      id,
      sentiment,
    ] = tweetArray;

    tweets.tweetIds.push(id);
    tweets.sentiment.push(sentiment);
  });
  return tweets;
};

const analyzeTweet = (text) => {
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

const storeTweet = (tweet) => {
  const newTweet = tweet;
  const analysis = analyzeTweet(newTweet.text);
  newTweet.sentiment = analysis;
  // remove the axios library and use native JS fetch method
  axios.post('http://localhost:9200/twitter/searches', {
    data: newTweet,
  }).then((res) => {
    // console.log(res);
  }).catch((err) => {
    console.log('parse data error is: ', err.response.status);
  });
};

module.exports.parseData = parseData;
module.exports.storeTweet = storeTweet;
