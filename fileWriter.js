var fs = require('fs');

module.exports = function() {

  this.write = function(name, data, overwrite) {
    if (!overwrite) {
      name = this.uid() + name;
    }
    return fs.writeFile(name, data, function(err, data) {
      if (err) {
        throw err;
      }
    });
  };

  this.create = function(name) {
    if (name === undefined) {
      name = 'nullFile';
    }
    return fs.writeFile(name, '', function(err) {
      if (err) {
        throw err;
      }
    });
  };

  this.append = function(name, data) {
    if (!name) {
      throw "No filename given.";
    }
    data = '\n' + data;
    return fs.appendFile(name, data, function(err) {
      if (err) {
        throw err;
      }
    });
  };

  this.read = function(name) {
    return fs.readFile(name, function(err, data) {
      if (err) {
        throw err;
      }
      console.log(data.toString());
    });
  };

  this.uid = function() {
    var m = new Date();
    var dateString = m.getUTCFullYear() + '' + (m.getUTCMonth()+1) + '' + m.getUTCDate() + '' + m.getUTCHours() + '' + m.getUTCMinutes() + '' + m.getUTCSeconds();
    return dateString;
  };

};