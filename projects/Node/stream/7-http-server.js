const http = require("http");
const through = require("through2");

let server = http.createServer((req, res) => {
  if(req.method === "POST"){
    req.pipe(function (data, encoding, next){
      this.push(data.toString().toUpperCase());
      next();
    }).pipe(res.end);
  }else{
    res.end("Send me POST");
  }
}
)

server.listen(3000);
