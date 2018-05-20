//All the books after a `"type":"genre"` row belong in that
//genre until the next `"type":"genre"` comes along in the output.
//generate a newline-separated list of JSON lines of genres,
//each with a `"books"` array containing all the books in that genre.
const combine = require("stream-combiner");
const through = require("through2");
const split = require("split");
const zlib = require("zlib");

module.exports = function () {
  let grouper = through(write, end);
  let current;

  function write (line, _, next) {
    if (line.length === 0) return next();

    var row = JSON.parse(line);

    if (row.type === "genre") {
      if (current) {
        this.push(JSON.stringify(current) + '\n');
      }
      current = { name: row.name, books: [] };
    }
    else if (row.type === "book") {
      current.books.push(row.name);
    }
    next();
  }

  function end (next) {

    if (current) {
      this.push(JSON.stringify(current) + '\n');
    }
    
    next();
  }

  return combine(split(), grouper, zlib.createGzip());
};

