var fileSystem = require('fs');
var buf = fileSystem.readFileSync("introduction.js");
var str = buf.toString();
var array = str.split("\n");
console.log(array.length);
