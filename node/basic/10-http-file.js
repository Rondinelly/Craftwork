const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "content-type": "text/plain" })

  fs.createReadStream(__filename).pipe(res);
  console.log("Piped the file for you.");
})

server.listen(3001);
