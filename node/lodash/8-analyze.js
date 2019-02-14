const lodash = require("lodash");

const analyze = function (item) {

    let average;
    let underperform;
    let overperform;
    
    item = lodash.sortBy(item, "income");

    average = lodash.reduce(item, function(sum, num) {
        return sum + num.income;
    }, 0);

    average = average / item.length;

    underperform = lodash.filter(item, function (num) {
        return num.income <= average;
    });

    overperform = lodash.filter(item, function (num) {
        return num.income > average;
    });

    return {
        average: average,
        underperform: underperform,
        overperform: overperform
    };

};

module.exports = analyze;
