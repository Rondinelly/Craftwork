function *upper (items) {
	if(Array.isArray(items)){
		for(i = 0; i < items.length; i++){
			try{
				yield items[i].toUpperCase();
			}catch(e){
				yield null;
			}
		}
	}else{
		yield items;
	}
}

var items = ['a', 'B', 1, 'c'];

for (var item of upper(items)) {
  console.log(item);
}
