const chalk = require('chalk');

exports.log = function(content, color='red') {
    return console.log(chalk[color](content));
}