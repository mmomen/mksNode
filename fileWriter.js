var fs = require('fs');

module.exports = function() {

  this.write = function(name, data, overwrite) {
    var exist = fs.existsSync(name);
    if (overwrite === 'true') {
      overwrite = true;
    } else {
      overwrite = false;
    }
    if (!overwrite && exist) { //do not overwrite and file exists, write file to new name
      name = this.uid() + name;
      return fs.writeFile(name, data, function(err, data) {
        if (err) {
          throw err;
        }
      });
    } else { //overwrite file and the file may exists, just write
      return fs.writeFile(name, data, function(err, data) {
        if (err) {
          throw err;
        }
      });
    }

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
      return data.toString();
    });
  };

  this.uid = function() {
    var m = new Date();
    var dateString = m.getUTCFullYear() + '' + (m.getUTCMonth()+1) + '' + m.getUTCDate() + '' + m.getUTCHours() + '' + m.getUTCMinutes() + '' + m.getUTCSeconds();
    return dateString;
  };

  this.move = function(oldPath, newPath) {
    return fs.rename(oldPath, newPath, function(err) {
      if (err) {
        throw err;
      }
    });
  };

  this.copy = function(origPath, newPath) {
    // return fs.createReadStream(origPath).pipe(fs.createWriteStream(newPath))
    var orig = this.read(origPath);
    // console.log(orig);
    return this.write(newPath, orig, true);
  };

};