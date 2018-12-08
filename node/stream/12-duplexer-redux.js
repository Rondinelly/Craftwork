const duplexer = require("duplexer2");
const through = require("through2").obj;
  
module.exports = function (counter) {
    let counts = {};
    let input = through(write, end);
      return duplexer({objectMode: true}, input, counter);
      
      function write (row, _, next) {
          counts[row.country] = (counts[row.country] || 0) + 1;
          next();
      }
      function end (done) {
          counter.setCounts(counts);
          done();
      }
  };
