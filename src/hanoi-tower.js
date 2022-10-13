const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {

  let count = 0;
function resolver_tower_of_hanoi(s, d, e, disksNumber) {
  if (disksNumber <= 0) {
      return
  }
  resolver_tower_of_hanoi(s, e, d, disksNumber - 1)
  count++;
  resolver_tower_of_hanoi(e, d, s, disksNumber - 1);
  let sp = turnsSpeed / 60 / 60;
  let speed = Math.floor(count / sp);
  return {
    turns: count, seconds: speed
  }
  }

  return resolver_tower_of_hanoi('s', 'd', 'e', disksNumber);
}

module.exports = {
  calculateHanoi
};
