const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

const fs = require('fs');

const files = fs.readdirSync('./');
console.log(files);

setTimeout(() => {
    console.log('10 seconds delay');
}, 5000);

var time = 0;
var timer = setInterval(() => {
    time += 2;
    console.log(time +'second have passed');
    if (time>5) {
      clearInterval(timer);
    }
}, 5000);
 
