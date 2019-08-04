const getNotes = require('./notes.js');
const chalk = require('chalk');
const validator = require('validator');

const error = chalk.red.inverse.bold('Error!');
const success = chalk.green.inverse.bold('Success!');

console.log(getNotes());
console.log('Is example@example.com an email address?: ' + validator.isEmail('example@example.com') + '....' + success);
console.log('Is @example.com an email address?: ' + validator.isEmail('example.com') + '.....' + error);