const lodash = require("lodash");

const template = function (inputVar) {

    let myTemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return lodash.template(myTemplate)(inputVar);
};

module.exports = template;
