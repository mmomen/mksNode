var FileApi = require('./fileWriter');
var myFs = new FileApi();
var command = process.argv[2].toLowerCase();

switch (command) {
  case "write":
    console.log(process.argv[5]);
    myFs.write(process.argv[3], process.argv[4] || '', process.argv[5]);
    break;
  case "create":
    myFs.create(process.argv[3]);
    break;
  case "append":
    myFs.append(process.argv[3], process.argv[4] || '');
    break;
  case "read":
    myFs.read(process.argv[3]);
    break;
  case "move":
    myFs.move(process.argv[3], process.argv[4]);
    break;
  case "copy":
    myFs.copy(process.argv[3], process.argv[4]);
    break;
  case "search":
    myFs.search(process.argv[3], process.argv[4]);
    break;
  default:
    throw "wtf dude where ur command at?";
}