var FileApi = require('./fileWriter');
var myFs = new FileApi();
var file = process.argv[2];
var str = process.argv[3];
// myFs.write(file, str);
// myFs.create(file);
// myFs.append(file, str);
// myFs.read(file);
myFs.write(file, str, false);