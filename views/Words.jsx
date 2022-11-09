const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ theme, words }) {
  return (
    <Layout>
      <script defer src="/js/words.js" />
      <h2 className="wordTitle">
        Категория:
        {' '}
        {theme.title}
      </h2>
      <h3 className="wordTitle">
        <a href={`/test/${theme.id}`} className="testLink">Пройти тест по выбранной категории</a>
      </h3>
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
