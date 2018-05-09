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
      let tweetIds = [];
      let sorted = [];
      hits.forEach(hit => {
        sorted.push([hit._source.data.created_at, hit._source.data.id_str]);
        for (var i = 0; i < sorted.length; i++) {
          sorted.sort(sortDate(sorted[i], sorted[i + 1]));
          sorted.reverse();
          tweetIds.push(sorted[i][1]);
        }
      });
      let uniqueResults = [...new Set(tweetIds)];
      res.status(200).send(uniqueResults); 
    }).catch(err => {
      console.log(err);
    });
  });

const sortDate = function(a, b) {
  return b - a;
};

module.exports = router;