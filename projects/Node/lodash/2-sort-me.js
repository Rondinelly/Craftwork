const lodash = require("lodash");

const sorting = function (collection) {
    return lodash.sortBy(collection, item => -item.quantity);
};

module.exports = sorting;
