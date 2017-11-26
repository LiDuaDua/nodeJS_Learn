var fs = require('fs');


var path = process.argv[2];
var buffer = fs.readFileSync(path);

var lineList = buffer.toString().split('\n');

console.log(lineList.length - 1);
