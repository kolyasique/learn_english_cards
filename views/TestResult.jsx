const React = require('react');
const Layout = require('./Layout');

module.exports = function TestResult({ results }) {
  console.dir(results);
  return (
    <>
      {/* <script defer src="/js/test.js" /> */}
      <div className="testResult">
        {/* <h2 className="wordTitle">
          Категория:
          {' '}
          {resultTestUser.Theme.title}
        </h2> */}
        <h3>
          Количество всех ответов:
          {' '}
          {results.allCorrectAnswer + results.allUncorrectAnswer}
        </h3>
        <h3 id="countTrue">
          Правильных ответов:
          {results.allCorrectAnswer}
        </h3>
        <h3 id="countFalse">
          Не правильных ответов:
          {results.allUncorrectAnswer}
        </h3>
      </div>
    </>
  );
};
