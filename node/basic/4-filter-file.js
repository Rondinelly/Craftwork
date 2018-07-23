const fs = require("fs");
const path = require("path");

const folder = "";
const extension = "." + "";

fs.readdir(folder, function (err, list) {
	if(err)
	   return console.log(err);

	list.forEach(function (file) {
	  if (path.extname(file) === ext){
		console.log(file);
	}
      })
});
