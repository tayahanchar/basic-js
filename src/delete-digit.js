const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let array = n.toString().split('');
  let result = [];

  for (let index = 0; index < array.length; index++) {
    let array = n.toString().split('');
    array.splice(index, 1);
    result.push(array);
  }

  return Math.max(...result.map(elem => elem.join('')));
}

module.exports = {
  deleteDigit
};
