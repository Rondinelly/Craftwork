function *range(from, to) {
  for(var i = from; i <= to; i++) {
    yield i;
  }
}

for (var line of range(5, 10)) {
    console.log(line);
}
