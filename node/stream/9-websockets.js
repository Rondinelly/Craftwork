const ws = require("websocket-stream");
let stream = ws("ws://localhost:80");

stream.write("hello");
