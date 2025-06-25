// Q3 - create a new folder named 'math' and create a file math.js. In math.js, define two functions:
// a. add(a, b): takes two numbers as arguments and returns their sum.
// b. subtract(a, b): takes two numbers as arguments and returns their difference.
// create a new file index.js and just export those functions and then use those function in any of the file



const { add, subtract } = require('./math/math');

console.log(add(2,2))
console.log(subtract(4,2))