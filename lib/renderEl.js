require('@babel/register');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

module.exports = function createElem(reactComponent, properties, resolve) {
  const reactEl = React.createElement(reactComponent, properties);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  return resolve.json({ html });
};