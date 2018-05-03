
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }), 
    knex.schema.createTableIfNotExists('tweets', function(table) {
      table.increments('id').unsigned().primary();
      table.string('text', 240).notNullable();
      table.string('username', 100).notNullable();
      table.string('tweet_location', 100).nullable();
      table.string('created_at', 100).notNullable();
      table.string('hashtag_1', 100).nullable();
      table.string('hashtag_2', 100).nullable();
    }),
    knex.schema.createTableIfNotExists('sentiments', function(table) {
      table.increments('id').unsigned().primary();
      table.integer('sentiment_score', 10).nullable();
      table.integer('comparative_sentiment', 50).nullable();
      table.integer('tweet_id').references('tweets.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles')
  ]);
};

