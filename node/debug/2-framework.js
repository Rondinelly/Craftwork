//bundle
module.exports = scenario;

function scenario(log, cb) {
  function start() {
    process.nextTick(thing);
  }

  let value = 97;
  log.info({value : value}, "scenario");

  function foo() {
    value *= 13;
    log.info({value : value}, "foo");
    cb(value);
  }

  start();

  function racer() {
    value &= 255;
    log.info({value : value}, "racer");
    setTimeout(foo, 0);
  }

  log.error("bad assignment on same tick");
  log.info({value : value}, "scenario");

  function thing() {
    value += 131;
    log.info({value : value}, "thing");
    process.nextTick(racer);
  }
}

//exec
let bunyan = require("bunyan");
let log = bunyan.createLogger({name: "scenario"});


//jstrace
const createServer = require("http").createServer;

const trace = require("jstrace");

createServer(function (req, res) {
  trace("request:start", {url : req.url});

  res.setHeader("content-type", "application/json");

  var status, body;
  if (req.url === "/test" && req.method === "GET") {
    status = 200; body = {ok : true};
  }
  else {
    status = 404; body = {error : "notfound"};
  }

  res.writeHead(status);
  res.end(JSON.stringify(body));

  trace("request:end", {statusCode : status, body : body});
}).listen(3001, function () { console.error("up"); });
