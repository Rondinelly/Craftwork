const spawn = require("child_process").spawn;
const duplexer = require("duplexer2");

module.exports = function (cmd, args) {
    let ps = spawn(cmd, args);
    return duplexer(ps.stdin, ps.stdout);
};
