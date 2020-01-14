const concat = require("concat-stream");

process.stdin.pipe(concat(function (data) {
  let result = data.toString().split("").reverse().join("");
  console.log(result);
}));
