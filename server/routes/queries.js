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
      q: query
    }).then((body) => {
      const hits = body.hits.hits;
      let results = [];
      hits.forEach(hit => {
        results.push(hit._source.data.id_str);
      });
      res.status(200).send(results); 
    }).catch((err) => {
      //console.log(err);
    });
  });

module.exports = router;