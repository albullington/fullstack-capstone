const express = require('express');
const { client } = require('../../db/elasticsearch');
const { parseData } = require('../helpers/parseData');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('processing query');
});

router.get('/:query', (req, res) => {
  // look into async await, you will need to rebuild webpack to use ES7
  const { params: { query } } = req;
  client.search({
    index: 'twitter',
    type: 'searches',
    q: `data.text:${query}`,
  }).then((body) => {
    const tweets = parseData(body);
    res.status(200).send(tweets);
  }).catch((err) => {
    throw (err);
  });
});

module.exports = router;
