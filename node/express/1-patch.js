const express = require("express");
const app = express();

const patch = "/home";

app.get(patch, function (req, res) {
	res.end("Hello World!");
});

app.listen(3000);

