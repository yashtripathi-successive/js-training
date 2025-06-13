//Q8 - Write a program to remove dupliacte elements from an array

let arr = [1, 2, 1, 2, 3];
let seen = new Set();
let ans = "";
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
  }else{
      ans+=arr[i]+' ';
  }
}

console.log(ans);
}

