var cryptoAPI = require('./crypto');
var crypto = new cryptoAPI();

var secret_key = "pipe";
var encrypted_data = crypto.encrypt("data", secret_key);

console.log(crypto.decrypt(encrypted_data, secret_key));