////Q14 - Write a program to reverse an array

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter arr (comma separated numbers): ', (input) => {
  const trimmed = input.trim();

  if (!trimmed) {
    console.log('input cannot be empty.');
    readline.close();
    return;
  }

  let arr = trimmed.split(',').map(val => {
    const num = Number(val.trim());
    if (isNaN(num)) {
      console.log(`invalid number:`);
      readline.close();
      process.exit(1);
    }
    return num;
  });

  console.log('Original array:', arr);

  const reverse = (arr) => {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }

  const swap = (arr, start, end) => {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
  }

  reverse(arr);
  console.log('Reversed array:', arr);
  readline.close();
});
