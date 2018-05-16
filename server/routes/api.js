const express = require('express');
const React = require('react');

const App = require('../../public/dist/bundle-server');
const { Html } = require('../templates/layout');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');

const router = express.Router();

router.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  const appClass = App.default;
  const body = renderToString(sheet.collectStyles(React.createElement(appClass)));
  const styles = sheet.getStyleTags();
  const title = 'Server Side Rendering';
  res.status(200).send(Html({
    body,
    styles,
    title,
  }));
})
  .post((req, res) => {
    res.status(201).send({ data: 'Posted!' });
  });

module.exports = router;
