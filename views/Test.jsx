const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function Test({ theme, words, userInSession }) {
  return (
    <Layout userInSession={userInSession}>
      <script defer src="/js/test.js" />
      <h2 className="wordTitle">
        Категория:
        {' '}
        {theme.title}
      </h2>
      {words.map((word) => (
        <Card word={word} />
      ))}
    </Layout>
  );
};
