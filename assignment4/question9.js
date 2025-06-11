//Q9 - Write a program to find the last duplicate index in an array


let arr = [1, 2, 1, 2, 1,5,5,8,2,7,8];


for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
    console.error(`Invalid element found`);
    process.exit(1);
  }
}

const freq = {};
for (const num of arr) {
  freq[num] = freq[num] ? freq[num] + 1 : 1;
}


for (const num in freq) {
  if (freq[num] > 1) {
    console.log(`${num} has a last index at ${arr.lastIndexOf(Number(num))}`);
  }
}
