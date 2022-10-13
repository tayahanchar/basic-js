const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newArray = [];

  str.split('').forEach((element, index) => {

    if(!(str[index + 1] === element)) {
      newArray.push(1, element);
    }
  });

  str.split('').forEach((element, index) => {

    if(str[index + 1] === element) {
      newArray[newArray.indexOf(element) - 1] +=1;
    }
  });

  return newArray.filter(element => element !== 1).join('');
}

module.exports = {
  encodeLine
};
