const React = require('react');
const { renderToString } = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');

const Layout = require('../templates/layout');

const renderComponent = (component, props = {}) => {
  const sheet = new ServerStyleSheet();
  const styles = sheet.getStyleTags();
  const title = 'Server Side Rendered: Twitter Analytics';
  const app = React.createElement(component, props);
  const body = renderToString(sheet.collectStyles(app));
  return Layout({
    body,
    styles,
    title,
  });
};

module.exports.renderComponent = renderComponent;
