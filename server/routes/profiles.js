const express = require('express');

const router = express.Router();
const ProfileController = require('../controllers').Profiles;

router.get('/', ProfileController.getAll);
// .post(ProfileController.create)


router.get('/:id', ProfileController.getOne)
  .put(ProfileController.update);
// .delete(ProfileController.deleteOne)

module.exports = router;
