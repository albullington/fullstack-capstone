const db = require('../');

const Sentiment = db.Model.extend({
  tableName: 'Sentiments',
  // auths: function() {
  //   return this.hasMany('Auth');
  // }
});

module.exports = db.model('Sentiment', Sentiment);
