const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) {
    return 'Unable to determine the time of year!';
  }

  if(!Date.parse(date)) {
    throw new Error('Invalid date!');
  }

  if(Date.parse(date) == Date.parse(new Date())) {
    throw new Error('Invalid date!');
  }

  const seasons = ['spring', 'summer', 'autumn', 'winter'];

  let month = date.getMonth();
  if(month === 0 || month === 1 || month === 11) {
    return seasons[3];
  }
  if(month === 2 || month === 3 || month === 4) {
    return seasons[0];
  }
  if(month === 5 || month === 6 || month === 7) {
    return seasons[1];
  }
  if(month === 8 || month === 9 || month === 10) {
    return seasons[2];
  }
}

module.exports = {
  getSeason
};
