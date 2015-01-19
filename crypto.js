var crypto = require('crypto');

module.exports = function() {
  var algorithm = 'aes192';

  this.encrypt = function(data, key) {
    var cipher = crypto.createCipher(algorithm, key);
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
  };

  this.decrypt = function(cipher, key) {
    var decipher = crypto.createDecipher(algorithm, key);
    var dec = decipher.update(cipher, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
  }

};