/* eslint-disable react/prop-types */
const React = require('react');
const Header = require('./Header');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <script defer src="/js/auth/registrationStatusShow.js" />
        <script defer src="/js/auth/loginErrorShow.js" />
        <script defer src="/js/showThemeForm.js" />
        <title>
          english
        </title>
      </head>
      <body>
        <Header />
        { children }
      </body>
    </html>
  );
};
