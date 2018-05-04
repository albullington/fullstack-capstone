const elasticsearch = require('elasticsearch');
const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});

client.search({
  q: 'tweet'
}).then((body) => {
  const hits = body.hits.hits;
}).catch((error) => {
  console.trace(error.message);
});