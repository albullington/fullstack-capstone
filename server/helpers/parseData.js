const parseData = (body) => {
  // destructure the body
  let { hits: { hits } } = body;
  // const hits = body.hits.hits;

  let tweets = {
    tweetIds: [],
    sentiment: []
  };

  let sorted = hits.map(hit => {
    let {
      created_at,
      id_str,
      sentiment
    } = hit._source.data;

    return [id_str, sentiment, created_at];
    // for (var i = 0; i < sorted.length; i++) {
    //   console.log(sorted[i]);
    //   sorted.sort(sortDate(sorted[i[0]], sorted[i + 1[0]]));
    //   sorted.reverse();
    //   console.log(sorted, 'sorted');
    //   // tweets.push([sorted[i][1], sorted[i][2]]);
    // }
  });

  // use HoF
  // for (var i = 0; i < sorted.length; i++) {
  //   // array destructure
  //   tweets.tweetIds.push(sorted[i][1]);
  //   tweets.sentiment.push(sorted[i][2]);
  // }

  sorted.forEach((tweetArray) => {
    let [
      id, 
      sentiment,
    ] = tweetArray;

    tweets.tweetIds.push(id);
    tweets.sentiment.push(sentiment);
  });
      // let uniqueResults = [...new Set(tweets)];
      // console.log('uniques', uniqueResults);
  return tweets;
};

module.exports = parseData;