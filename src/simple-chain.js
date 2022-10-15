const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
      this.chain.push(value);
      return chainMaker;
  },

  removeLink(position) {
    if(position > this.chain.length || typeof position === 'string' || position === 0 || position < 0) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return chainMaker;
  },

  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },

  finishChain() {
    let result = []
    this.chain.forEach(element => {
      result.push(`( ${element} )`)
    });
    this.chain = [];
    return result.join('~~');
  }
};

module.exports = {
  chainMaker
};
