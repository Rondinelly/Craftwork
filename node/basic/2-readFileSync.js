const fs = require("fs");

const contents = fs.readFileSync(_dirname);
const lines = contents.toString().split('\n').length;
console.log(lines);
