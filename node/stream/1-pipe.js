//Use `fs.createReadStream()` to pipe the given file to `process.stdout`.
const fs = require("fs");
fs.createReadStream(__filename).pipe(process.stdout);

//Take data from `process.stdin` and pipe it to `process.stdout`.
process.stdin.pipe(process.stdout);

//Convert data from `process.stdin` to upper-case
const through = require('through2');

const tr = through(function (buf, _, next) {
	this.push(buf.toString().toUpperCase());
	next();
});

process.stdin.pipe(tr).pipe(process.stdout);

//Convert even-numbered lines to upper-case and odd-numbered lines to lower-case.
const through = require('through2');
const split = require('split');

let lineCount = 0;
const tr = through(function (buf, _, next) {
    let line = buf.toString();

    this.push(lineCount % 2 === 0
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    );
    
    lineCount ++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
    
//ex.:

// one
// TWO
// three
// FOUR

// Buffer the text and reverse it using the `concat-stream` module before writing it to stdout.
const concat = require('concat-stream');
  
process.stdin.pipe(concat(function (src) {
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));
