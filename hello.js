var fs = require('fs');
var fileName = "hello.txt";
var textToWrite = "Hello World";

fs.appendFile(fileName, textToWrite + "\n", function (err) {
  
  console.log("File " + fileName + " had text \"" + textToWrite + "\" appended");
});
 