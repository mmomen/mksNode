var cryptoAPI = require('./crypto');
var crypto = new cryptoAPI();

var secret_key = "pipe";
console.log(crypto.encrypt("data", secret_key));