const React = require('react');
const random = require('../lib/random');

module.exports = function Card({ word, words }) {
  const y = word.theme_id;
  const x = [random(y), random(y), random(y), word.translation].sort();
  return (
    <div className="testDiv" style={{ display: 'none' }}>
      <div className="test" />
      <div id={`w${word.id}`} className="testWord">{word.word}</div>
      <div className="testBtnDiv">
        {x.map((el) => (
          <button name={word.id} className="testBtn" type="button">{el}</button>
        ))}
      </div>
    </div>
  );
};
