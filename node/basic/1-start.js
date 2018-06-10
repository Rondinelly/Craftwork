let count = 0;

function sumNumbers () {
	for (var i = 0; i < process.argv.length; i++) {	
	if (i > 1)
		 count += Number(process.argv[i]);
	}
}

sumNumbers();
console.log(count);
