/* eslint-disable default-param-last */
const ReactDOMServer = require('react-dom/server');
const React = require('react');

module.exports = function renderTemplate(component, props = {}, response) {
  const reactElement = React.createElement(component, props);

  const html = ReactDOMServer.renderToStaticMarkup(reactElement);
  response.write('<!DOCTYPE html>');
  response.end(html);
};
