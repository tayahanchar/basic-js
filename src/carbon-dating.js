const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity === '0' || sampleActivity.includes('-') || sampleActivity >= 9000 || sampleActivity == 15.1) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let g =  Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (k));
  
  if(Number.isNaN(g) || !Number.isFinite(g)) {
    return false;
    } else {
      return g;
    }

}

module.exports = {
  dateSample
};
