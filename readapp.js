var fs = require('fs');

var read = fs.readFileSync('readMe.txt', 'utf8');
console.log(read);
