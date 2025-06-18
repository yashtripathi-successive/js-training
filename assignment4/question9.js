//Q9 - Write a program to find the last duplicate index in an array


let arr = [1, 2, 2, 2,3];

if (!Array.isArray(arr)) {
  console.log("Input is not an array.");
} else if (arr.length === 0) {
  console.log("Array is empty.");
} else if (arr.some(ele => typeof ele !== "number" || isNaN(ele))) {
  console.log("error found.");
} else {

const freq = {};
for (const num of arr) {
  freq[num] = freq[num] ? freq[num] + 1 : 1;
}


for (const num in freq) {
  if (freq[num] > 1) {
    console.log(`${num} has a last index at ${arr.lastIndexOf(Number(num))}`);
  }
}
}
