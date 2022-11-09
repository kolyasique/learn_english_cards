const fs = require('fs');

const words = fs.readFileSync(`${__dirname}/words.txt`, 'utf-8').split('\n');

module.exports = function random() {
  const rnd = Math.floor(Math.random() * words.length);
  const res = words[rnd];
  return res;
};
