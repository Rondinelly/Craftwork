const fs = require("fs"); 

let data = fs.readFileSync(__dirname);
let result = -1;

for (var i = 0; i < data.toString().split("\n").length; i++) {
	result++;
}

console.log(result);
