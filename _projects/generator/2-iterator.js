function* factorial (line){
	let result = 1;
	for(i = 1; i <= line; i++){
		result *= i;
		yield result;
	}
}

for(let line of factorial(5)){
	console.log(line);
}
