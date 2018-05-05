'use strict';
const express = require('express');
// const Sentiment = require('sentiment');
const router = express.Router();
// const sentiment = new Sentiment();
// const result = sentiment.analyze('Cats are stupid.');

router.route('/')
  .get((req, res) => {
    res.status(200).send('Hello World!');
  })
  .post((req, res) => {
    console.log('in the correct route');
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
