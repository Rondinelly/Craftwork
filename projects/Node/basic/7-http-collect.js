const http = require("http");
const bl = require("bl");

http.get("http://nodejs.org/dist/index.json", function (response) {
  response.pipe(bl(function (err, data) {
    if (err) {
      return console.error(err);
    }
	
    data = data.toString();
	
    console.log(data.length);
    console.log(data);
  }))
});
