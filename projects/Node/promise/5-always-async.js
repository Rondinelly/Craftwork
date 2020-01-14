const promise = new Promise((fullfill, reject) => {
	fullfill("PROMISE VALUE");
})

promise.then(console.log);

console.log("MAIN PROGRAM");
