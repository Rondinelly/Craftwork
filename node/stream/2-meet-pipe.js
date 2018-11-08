const fs = require("fs");
fs.createReadStream("data.json").pipe(process.stdout);
