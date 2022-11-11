const fs = require('fs');

module.exports = function random(number) {
  const words = fs.readFileSync(`${__dirname}/wrong-words/${number}/words${number}.txt`, 'utf-8').split('\n');
  const rnd = Math.floor(Math.random() * words.length);
  const res = words[rnd];
  return res;
};
