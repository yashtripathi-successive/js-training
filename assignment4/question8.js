//Q8 - Write a program to remove dupliacte elements from an array

let arr = ['a','a',1,1];
let seen = new Set();
let duplicate = [];

if (!Array.isArray(arr)) {
  console.log("Input is not an array.");
} else if (arr.length === 0) {
  console.log("Array is empty.");
} else {
  arr.map((ele) => {
    if (seen.has(ele)) {
      duplicate.push(ele);
    } else {
      seen.add(ele);
    }
  });

  console.log(duplicate);
}


