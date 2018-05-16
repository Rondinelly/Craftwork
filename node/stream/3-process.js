//function that spawns a process from a `cmd` string and an `args` array and returns a single duplex stream joining together
//the stdin and stdout of the spawned process
const spawn = require('child_process').spawn;
const duplexer = require('duplexer2');

module.exports = function (cmd, args) {
	let ps = spawn(cmd, args);
	return duplexer(ps.stdin, ps.stdout);
};

//Create an object to track the number of occurrences
const duplexer = require('duplexer2');
const through = require('through2').obj;

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


