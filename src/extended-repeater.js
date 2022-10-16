const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator ='|'} = options;

  let repeatStr = [];
  for (let i = 0; i < repeatTimes; i++) {
    repeatStr.push(str);
  }

  let repeataddition = [];
  for (let i = 0; i < repeatTimes; i++) {
    repeataddition.push([]);
    for (let k = 0; k < additionRepeatTimes; k++) {
      if(addition === null) {
        repeataddition[i].push(`${addition}`);
      } else {
        repeataddition[i].push(addition);
      }
    }
  }

  let repeatadditionItem = []

  repeataddition.map(element => {
    repeatadditionItem .push(element.join(`${additionSeparator}`))
  });

  for (let i = 0; i < repeatTimes; i++) {
    repeatStr[i] = repeatStr[i] + repeatadditionItem[i];
  }

  return repeatStr.join(`${separator}`);
}

module.exports = {
  repeater
};
