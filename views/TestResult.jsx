const React = require('react');
const Layout = require('./Layout');

module.exports = function TestResult({ results }) {
  console.dir(results);
  return (
    <>
      {/* <script defer src="/js/test.js" /> */}
      <div className='central-form-div3'>
      <div className="testResult">
        {/* <h2 className="wordTitle">
          Категория:
          {' '}
          {resultTestUser.Theme.title}
        </h2> */}
        <h2 id='testIsOver'> Тест завершен!
          {/* Количество всех ответов:
          {' '}
          {results.allCorrectAnswer + results.allUncorrectAnswer} */}
        </h2>
        <h3 id="countTrue">
          Правильных ответов:  
          <p id="good">{results.allCorrectAnswer}</p>
        </h3>
        <h3 id="countFalse">
          Не правильных ответов:  
          <p id='bad'>{results.allUncorrectAnswer}</p>
        </h3>
        <h2 id='success'> Успех: {Math.round((results.allCorrectAnswer/(results.allCorrectAnswer + results.allUncorrectAnswer))*100)}%</h2>
      </div>
      </div>
    </>
  );
};
