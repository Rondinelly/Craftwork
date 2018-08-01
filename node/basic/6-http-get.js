const http = require("http");

http.get("http://nodejs.org/dist/index.json", function (response) {
  response.setEncoding("utf8");
  response.on("data", console.log);
  response.on("error", console.error);
}).on("error", console.error);
