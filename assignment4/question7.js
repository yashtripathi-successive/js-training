//Q7 - Write a program to find index of duplicate elements in an array


let arr = [1,'a','b','a',1];
let seen = new Set();
let res = [];

if (!Array.isArray(arr)) {
  console.log("Input is not an array.");
} else if (arr.length === 0) {
  console.log("Array is empty.");
} else {
  arr.map((ele, index) => {
    if (seen.has(ele)) {
      res.push(index);
    } else {
      seen.add(ele);
    }
  });

  console.log(res);
}

