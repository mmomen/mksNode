var FileApi = require('./fileWriter');
var myFs = new FileApi();
var command = process.argv[2].toLowerCase();
var file = process.argv[3];
var str = process.argv[4] || '';
var overwrite = process.argv[5] || false;

switch (command) {
  case "write":
    myFs.write(file, str, overwrite);
    break;
  case "create":
    myFs.create(file);
    break;
  case "append":
    myFs.append(file, str);
    break;
  case "read":
    myFs.append(file);
    break;
  case "move":
    myFs.move(process.argv[3], process.argv[4]);
    break;
  default:
    throw "wtf dude where ur command at?";
}