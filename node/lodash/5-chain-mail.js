const lodash = require("lodash");

let wordsmodify = function (arr) {
    return lodash.chain(arr)
      .map(item => item + "Chained")
      .map(item => item.toUpperCase())
      .sortBy()
      .value();
};

module.exports = wordsmodify;
