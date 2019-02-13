const lodash = require("lodash");

const overview = function (orders) {

    let overviewArray = [];
    let total = 0;

    orders = lodash.groupBy(orders, "article");

    lodash.forEach(orders, function (item, key) {

        key = parseInt(key);
        total = 0;

        if (item.length === 1) {
            total = item[0].quantity;
        } else {
            total = lodash.reduce(item, function(sum, item) {
                return sum + item.quantity;
            }, 0);
        }

        overviewArray.push({
            article: key,
            total_orders: total
        });
    });
    
    overviewArray = lodash.sortBy(overviewArray, "total_orders").reverse();

    return overviewArray;
};

module.exports = overview;
