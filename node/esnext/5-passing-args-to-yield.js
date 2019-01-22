module.exports = function *multiplier() {
  var num = 0,
      mult = 1;

  while(true) {
    num++;
    mult = yield num * mult;
    if (!mult) {
      mult = 1;
    }
  }
}
