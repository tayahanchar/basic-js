const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(value) {
    this.direct = value;
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }


  encrypt(message, key) {

    if(!message || !key) {
      throw new Error('Incorrect arguments!');
      }
    
      let messageNumbers = [];
      
      message.toUpperCase().split('').forEach(element => {
        if(this.alphabet.includes(element)) {
          messageNumbers.push(this.alphabet.indexOf(element))
        }
      });

      let keyArray = key.toUpperCase().split('');

      while(keyArray.length < messageNumbers.length) {
        key.toUpperCase().split('').forEach(element => {
          keyArray.push(element);
        })
      }

      keyArray = keyArray.slice(0, messageNumbers.length);

      let keyNumbers = [];

      keyArray.forEach(element => {
        if(this.alphabet.includes(element)) {
          keyNumbers.push(this.alphabet.indexOf(element))
        }
      });

      let resultNumbers = [];

      for (let i = 0; i < messageNumbers.length; i++) {
        resultNumbers.push(((messageNumbers[i] + keyNumbers[i]) % 26));
      }

      let result = [];

      resultNumbers.forEach((element, index)=> {
        result.push(this.alphabet[element])
      });
     
    let resultMessage = [];

      message.toUpperCase().split('').forEach(element => {
        if(!this.alphabet.includes(element)) {
          resultMessage.push(element);
        } else {
          resultMessage.push(result.splice(0, 1));
        }
      })

      if(this.direct === false) {
        return resultMessage.reverse().join('');
      } else {
        return resultMessage.join('');
      }
  }


  decrypt(encryptedMessage, key) {

    if(!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let encryptedMessageNumbers = [];
      
    encryptedMessage.split('').forEach(element => {
      if(this.alphabet.includes(element)) {
        encryptedMessageNumbers.push(this.alphabet.indexOf(element))
      }
    });

    let keyArray = key.toUpperCase().split('');

      while(keyArray.length < encryptedMessageNumbers.length) {
        key.toUpperCase().split('').forEach(element => {
          keyArray.push(element);
        })
      }

    keyArray = keyArray.slice(0, encryptedMessageNumbers.length);

    let keyNumbers = [];

      keyArray.forEach(element => {
        if(this.alphabet.includes(element)) {
          keyNumbers.push(this.alphabet.indexOf(element))
        }
      });

      let resultNumbers = [];

      for (let i = 0; i < encryptedMessageNumbers.length; i++) {
        let min = ((encryptedMessageNumbers[i] - keyNumbers[i]) % 26);
        if(min < 0) {
          resultNumbers.push(min + 26);
        } else {
          resultNumbers.push(min);
        }
      }

      let result = [];

      resultNumbers.forEach((element)=> {
        result.push(this.alphabet[element])
      });


      let resultMessage = [];

      encryptedMessage.toUpperCase().split('').forEach(element => {
        if(!this.alphabet.includes(element)) {
          resultMessage.push(element);
        } else {
          resultMessage.push(result.splice(0, 1));
        }
      })

      if(this.direct === false) {
        return resultMessage.reverse().join('');
      } else {
        return resultMessage.join('');
      }
  }
}

module.exports = {
  VigenereCipheringMachine
};
