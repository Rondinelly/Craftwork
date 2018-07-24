const filterFn = require("./5.2-module.js")
const dir = "";
const extension = "";

filterFn(dir, extension, function (err, list) {
  if (err) {
    return console.log(err);
  }

  list.forEach(function (file) {
    console.log(file)
  })
})
