const elasticsearch = require('elasticsearch');
const fs = require('fs');
const axios = require('axios');
const express = require('express');
const cors = require('cors');
const app = express();

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

app.use(cors());

app.get('/tweets/kittens/query', (req, res) => {
  let query = req.params;
  console.log('this is my query', query);
  queryElastic(query);
  res.send('received query request');
});

const queryElastic = function(query) {
  client.search({
    q: query
  }).then((body) => {
    const hits = body.hits.hits;
  }).catch((error) => {
    console.trace(error.message);
  });
};

module.exports.client = client;