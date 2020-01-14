const express = require("express");
const app = express();

app.get("/search", function (req, res) {
  const query = req.query;
  res.send(query);
});

app.listen(3001);
