const express = require("express");
const app = express();

app.set("view engine", "pug");

app.set("views", 3002);

app.get("/home", function(req, res) {
  res.render("index", {date: new Date().toDateString()});
});

app.listen(3001);
