const lodash = require("lodash");

const filterWhere = function (item) {
    return lodash.filter(item, {active: true});
};

module.exports = filterWhere;
