const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let newArray = arr.filter(element => element !== -1).sort(function(a, b) { return a - b; });

  arr.map((element, index) => {
    if(element !== -1) {
      arr[index] = 1;
    }
  });

  arr.map((element, index) => {
    if(element === 1) {
      arr[index] = newArray[0];
      newArray.shift();
    }
  });
  
  return arr;
}

module.exports = {
  sortByHeight
};
