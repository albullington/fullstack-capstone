// const Twit = require('twit');
// const fs = require('fs');
// const { consumerKey, accessToken, accessSecret, consumerSecret } = require('../../config/apikeys');
 
// const Twitter = new Twit({
//   consumer_key: consumerKey,
//   consumer_secret: consumerSecret,
//   access_token: accessToken,
//   access_token_secret: accessSecret, 
//   timeout_ms: 60 * 100
// });
 
// const stream = Twitter.stream('statuses/filter', {track: 'kittens'}); 

// stream.on('tweet', (tweet) => {
//   // console.log(tweet);
// });

// fs.stream.pipe(fs.createWriteStream('tweets.json'));