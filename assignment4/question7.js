//Q7 - Write a program to find index of duplicate elements in an array


let seen = new Set();

let arr = [1, 2, 3, 1,2,3,5,5];
let res = "";

if (!Array.isArray(arr)) {
  console.log("Input is not an array.");
} else if (arr.length === 0) {
  console.log("Array is empty.");
} else if (arr.some(ele => typeof ele !== "number" || isNaN(ele))) {
  console.log("string found.");
} else {
  for (let i = 0; i < arr.length; i++) {
  if (!seen.has(arr[i])) {
    seen.add(arr[i]);
  } else {
    res += i + " ";
  }
}

console.log(res);
}
