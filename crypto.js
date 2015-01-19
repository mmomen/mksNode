module.exports = function() {

  this.encrypt = function(data, key) {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alphabet = alphabet.toLowerCase();
    var alphaMax = alphabet.length - 1;
    var coded = "";
    var keyCode = 0; //value used to increment character

    for (var n=0;n<key.length;n++) {
      keyCode += alphabet.indexOf(key.charAt(n)); //calculate keyCode by grabbing its alphabet index for each character and adding it onto itself
    }

    // console.log(keyCode + '\n');

    for (var i=0;i<data.length;i++) {
      var currCh = data.charAt(i); //grab current character
      var alphaIndex = alphabet.indexOf(currCh); //grab the index in the alphabet of the current character
      var newIndex = alphaIndex + keyCode; //find the index of what will be the respective encrypted character
      if (newIndex > alphaMax) {
        newIndex = newIndex % alphaMax; //if it goes over 25, grab the remainder and use that - this allows the operation below to work without going over the max
      }
      // console.log(currCh, alphaIndex, newIndex, alphabet[newIndex]);
      coded = coded + alphabet[newIndex]; //add the encrypted character into the string to be returned
    }

    return coded;

  };

};