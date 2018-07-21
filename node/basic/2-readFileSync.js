const fs = require("fs");

const contents = fs.readFileSync(_dirname);
const lines = contents.toString().split('\n').length - 1;
console.log(lines);
