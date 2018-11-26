const request = require("request");

let resultStream = request.post("http://localhost:3001");

process.stdin.pipe(resultStream).pipe(process.stdout);
