const express = require('express');
const { client } = require('../middleware/queryDatabase');
const { tw } = require('../middleware/twitterStream');
const parseData = require('../helpers/parseData');
const router = express.Router();



router.get('/', (req, res) => {
  res.status(200).send('queries route working');
});

router.get('/:query', (req, res) => {
  // look into async await, you will need to rebuild webpack to use ES7
    let query = req.params.query;
    client.search({
      index: 'twitter', 
      type: 'searches', 
      q:`data.text:${query}`
    }).then(body => {
      let tweets = parseData(body);
      res.status(200).send(tweets); 
    }).catch(err => {
      console.log(err);
    });
  });

const sortDate = (a, b) => b - a;

module.exports = router;