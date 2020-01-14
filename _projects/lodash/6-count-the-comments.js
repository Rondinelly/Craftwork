const lodash = require("lodash");

const commentCount = function (comments) {

    var counted = [];
    
    comments = lodash.groupBy(comments, "username");

    lodash.forEach(comments, function (item, name) {

        counted.push({
            username: name,
            comment_count: lodash.size(item)
        });
    });

    return lodash.sortBy(counted, "comment_count").reverse();
};

module.exports = commentCount;
