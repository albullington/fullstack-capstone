const models = require('../models');

exports.seed = (knex, Promise) => {
  return models.Profile.where({ email: 'admin@domain.com' }).fetch()
    .then((profile) => {
      if (profile) {
        throw profile;
      }
      return models.Profile.forge({
        first: 'System',
        last: 'Admin',
        display: 'Administrator',
        email: 'admin@domain.com',
      }).save();
    })
    .error((err) => {
      // console.error('ERROR: failed to create profile');
      throw err;
    })
    .then(profile => models.Auth.forge({
      type: 'local',
      password: 'admin123',
      profile_id: profile.get('id'),
    }).save())
    .error((err) => {
      // console.error('ERROR: failed to create auth');
      throw err;
    })
    .catch(() => {
      console.log('WARNING: default user already exists.');
    });
};
