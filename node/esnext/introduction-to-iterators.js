module.exports = function makeCounter(someObj) {
  var num = 0,
      done = false;

  someObj.next = function() {

    if (num < 10) {
      num++;
    } else {
      done = true;
    }

    return {
      value: num,
      done: done
    }

  }
}
