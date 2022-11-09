const React = require('react');
const Layout = require('./Layout');

module.exports = function Main({ theme, words }) {
  return (
    <Layout>
      <script defer src="/js/test.js" />
      <h2 className="wordTitle">
        Категория:
        {' '}
        {theme.title}
      </h2>
      {words.map((word) => (
        <div id={`a${word.id}`} className="testDiv" style={{ display: 'none' }}>
          <div className="testWord">{word.word}</div>
          <div className="testBtnDiv">
            <button className="testBtn" type="button">{word.translation}</button>
            <button className="testBtn" type="button">{word.translation}</button>
            <button className="testBtn" type="button">{word.translation}</button>
            <button className="testBtn" type="button">{word.translation}</button>
          </div>
        </div>
      ))}
    </Layout>
  );
};
