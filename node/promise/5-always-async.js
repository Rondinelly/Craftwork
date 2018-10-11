const promise = new Promise((fullfiled, reject) => {
	fullfiled("PROMISE VALUE");
})

promise.then(console.log);

console.log('MAIN PROGRAM');
