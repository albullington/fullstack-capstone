const express = require('express');
const {client} = require('../middleware/queryDatabase');
const {tw} = require('../middleware/twitterStream');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.status(200).send('queries route working');
  });

router.route('/:query')
  .get((req, res) => {
    let query = req.params.query;
    client.search({
      index: 'twitter', 
      type: 'searches', 
      q:`data.text:${query}`
    }).then(body => {
      const hits = body.hits.hits;
      let tweets = {
        tweetIds: [],
        sentiment: []
      };
      let sorted = [];
      hits.forEach(hit => {
        sorted.push([hit._source.data.created_at, hit._source.data.id_str, hit._source.data.sentiment]);
        // for (var i = 0; i < sorted.length; i++) {
        //   console.log(sorted[i]);
        //   sorted.sort(sortDate(sorted[i[0]], sorted[i + 1[0]]));
        //   sorted.reverse();
        //   console.log(sorted, 'sorted');
        //   // tweets.push([sorted[i][1], sorted[i][2]]);
        // }
      });
      for (var i = 0; i < sorted.length; i++) {
        tweets.tweetIds.push(sorted[i][1]);
        tweets.sentiment.push(sorted[i][2]);
      }
      // let uniqueResults = [...new Set(tweets)];
      // console.log('uniques', uniqueResults);
      res.status(200).send(tweets); 
    }).catch(err => {
      console.log(err);
    });
  });

const sortDate = function(a, b) {
  return b - a;
};

module.exports = router;