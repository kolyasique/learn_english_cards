const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ titleTheme, words }) {
  return (
    <Layout>
      <script defer src="/js/words.js" />
      <h1>{titleTheme.title}</h1>
      <div className="wordsPage">
        {words.length
          ? words.map((word) => (
            <div className="card">
              <div className="cardFace front">{word.word}</div>
              <div className="cardFace back">{word.translation}</div>
            </div>
          ))
          : <h3>Слов не существует!</h3>}
      </div>
    </Layout>
  );
};
