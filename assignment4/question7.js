//Q7 - Write a program to find index of duplicate elements in an array


let seen = new Set();
const obj = {
    a:1
}
let arr = [1, 2, 3, 1, 3, 4, 5, 1, 2];
let res = "";

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "number" || isNaN(arr[i])) {
    console.log(`Invalid element found`);
    return;
  }

  if (!seen.has(arr[i])) {
    seen.add(arr[i]);
  } else {
    res += i + " ";
  }
}

console.log(res.trim());

