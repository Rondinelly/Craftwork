const fs = require("fs");

fs.readFile(__dirname, function (err, content) {
  if(err){
    return console.log(err);
  }
  
  const lines = content.toString().split("\n").length;
  console.log(lines);
});
