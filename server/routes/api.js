const express = require('express');
const React = require('react');

// const Layout = require('../templates/layout');
const App = require('../../public/dist/bundle-server');
const { renderToString } = require('react-dom/server');

// const { renderComponent } = require('../helpers/serverSideRender');

const router = express.Router();

router.get('/', (req, res) => {
  const appClass = App.default;
  const component = renderToString(React.createElement(appClass));
  res.status(200).send(component);
  // { body, styles, title }
})
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
