const express = require('express');
const {client} = require('../middleware/elastic_search');
const {tw} = require('../middleware/socket');
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
      // console.log(hits);
      let results = [];
      hits.forEach(hit => {
        results.push(hit._source.data.id_str);
      });
      res.status(200).send(results);
    }).catch((error) => {
      // console.trace(error.message);
    });  
  });

module.exports = router;