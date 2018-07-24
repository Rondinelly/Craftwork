const fs = require("fs");
const path = require("path");

module.exports = function (dir, extension, callback) {
  fs.readdir(dir, function (err, list) {
    if (err) {
      return callback(err)
    }

    list = list.filter(function (file) {
    return path.extname(file) === "." + extension
    })

    callback(null, list)
  })
}
