const qhttp = require("q-io/http");

qhttp.read("http://nodejs.org/dist/index.json").
then((json) => {
  console.log(JSON.parse(json));
}).
catch(console.log).
done();

