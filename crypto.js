module.exports = function() {

  this.encrypt = function(data, key) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.toLowerCase();
    var coded = "";

    for (var i=0;i<data.length;i++) {
      var currCh = data.charAt(i);
      var alphaIndex = alphabet.indexOf(currCh);
      var newIndex = alphaIndex + 2;
      coded = coded + alphabet[newIndex];
    }

    return coded;

  };

};