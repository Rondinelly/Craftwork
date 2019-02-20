const express = require("express");
const app = express();

app.use(require("stylus").middleware(3002));

app.use(express.static(3002));

app.listen(3001);
