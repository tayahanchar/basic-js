const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = [];

  domains.map(element => {
    let array = element.toString().split('.');
    if(array.length === 2) {
      result.push(array);
      result.push(array.slice(1));
    } else {
      result.push(array);
      result.push(array.slice(1));
      result.push(array.slice(2));
    }
  });
  
  let obj = {
  
  };
  
  result.map(element => element.reverse().join('.')).forEach(element => {
    obj[`.${element}`] ? obj[`.${element}`] += 1 : obj[`.${element}`] = 1;
    
  })
  
  return obj;
}

module.exports = {
  getDNSStats
};
