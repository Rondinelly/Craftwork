const ws = require("websocket-stream");
let stream = ws("ws://echo.websocket.org");

stream.write("hello");
stream.pipe(process.stdout);
