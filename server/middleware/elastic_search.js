const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace'
});

const search = function(query) {
  client.search({
    q: query
  }).then((body) => {
    const hits = body.hits.hits;
  }).catch((error) => {
    // console.trace(error.message);
  });  
};

module.exports.client = client;
module.exports.search = search;