function *flat (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      yield* flat(arr[i]);
    }
  } else {
    yield arr;
  }
}

let listNumbers = [1, [2, [3, 4], 5], 6];
for (let line of flat(listNumbers)) {
    console.log(line);
}
