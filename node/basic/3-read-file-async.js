const fs = require("fs");

fs.readFile(__dirname, function (err, data) {
	console.log(data.toString().split("\n").length - 1);
});
