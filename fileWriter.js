var fs= require('fs');

module.exports = function() {
  
  this.write = function(name, data) {
    return fs.writeFileSync(name, data);
  };

};