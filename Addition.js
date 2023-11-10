var readlineSync = require('readline-sync');

let a = parseInt (readlineSync.question('1st no :'));
let b = parseInt (readlineSync.question('2nd no :'));

console.log(a+b);