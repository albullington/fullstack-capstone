const express = require('express');
const {client} = require('../middleware/elastic-search');
const router = express.Router();
// const Sentiment = require('sentiment');
// const sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');

router.route('/tweets/:query')
  .get((req, res) => {
    let query = req.params;
    console.log('this is my query', query);
    client.search({
      q: query
    }).then((body) => {
      const hits = body.hits.hits;
    }).catch((error) => {
      console.trace(error.message);
    });
    res.status(200).send('received query request');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;