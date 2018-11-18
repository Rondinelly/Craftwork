const split = require("split");
const through = require("through2");

let line = 0;

process.stdin.pipe(split())
             .pipe(through(function (data, encoding, next){
               if(line % 2){
                 this.push(data.toString().toLowerCase() + "\n");
               }else{
                 this.push(data.toString().toUpperCase() + "\n");
               }

               line++;
               next();

             }))
             .pipe(process.stdout);
