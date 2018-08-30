var counter = function(arr) {
    return 'There are ' + arr.length + ' Element in this array';
}

var adder = function(a,b){
  return `the sum of the 2 numbers is ${a+b}`;
}
var pie = 3.14;
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pie = pie;