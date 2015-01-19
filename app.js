var FileApi = require('./fileWriter');
var myFs = new FileApi();
myFs.write(process.argv[2], process.argv[3]);