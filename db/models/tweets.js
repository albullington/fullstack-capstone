const db = require('../');

const Tweet = db.Model.extend({
  tableName: 'tweets',
  // auths: function() {
  //   return this.hasMany('Auth');
  // }
});

module.exports = db.model('Tweet', Tweet);
