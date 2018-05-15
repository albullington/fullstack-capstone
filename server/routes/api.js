const express = require('express');

const serverBundle = require('../../public/dist/server-bundle');
const { renderComponent } = require('../helpers/serverSideRender');

const router = express.Router();

router.get('/', (req, res) => {
  const component = renderComponent(serverBundle);
  // console.log('this is the component', component);
  res.status(200).send(component);
})
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
