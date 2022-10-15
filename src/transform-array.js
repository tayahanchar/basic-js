const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }

  const array = [...arr];

  arr.forEach((element, index) => {
    if(element === '--discard-next') {
      array.splice(array.indexOf('--discard-next'), 2);
    } 
    
    if(element === '--discard-prev') {
      if((arr[index - 2] === '--discard-next')) {
        array.splice(array.indexOf('--discard-prev'), 1);
      } else if(array.indexOf('--discard-prev') - 1 !== -1) {
        array.splice(array.indexOf('--discard-prev') - 1, 2);
      } else {
        array.splice(array.indexOf('--discard-prev'), 1);
      }
    } 
    
    if(element === '--double-next') {
      if(array.indexOf('--double-next') + 1 < array.length) {
        array.splice(array.indexOf('--double-next'), 1, array[array.indexOf('--double-next') + 1]);
      } else {
        array.splice(array.indexOf('--double-next'), 1);
      }
    }
    
      if(element === '--double-prev') {
        if((arr[index - 2] === '--discard-next')) {
          array.splice(array.indexOf('--double-prev'), 1);
        } else if(array.indexOf('--double-prev') - 1 !== -1) {
        array.splice(array.indexOf('--double-prev'), 1, array[array.indexOf('--double-prev') - 1]);
      } else {
        array.splice(array.indexOf('--double-prev'), 1);
      }
    }
  })
  return array;


}

module.exports = {
  transform
};
