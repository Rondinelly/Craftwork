const lodash = require("lodash");

let tempsort = function (item) {
    
    var result = {
        hot: [],
        warm: []
    };
    
    const check_temp = (item) => item > 19;

    lodash.forEach(item, function (town, townname) {

        if (lodash.every(town, check_temp)) {
            result.hot.push(townname);
        } else if (lodash.some(town, check_temp)) {
            result.warm.push(townname);
        }

    });

    return result;
};

module.exports = tempsort;
