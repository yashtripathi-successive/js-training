//Q10. Write a program to concatenate an input of array of arrays

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Type an array of arrays : ', (input) => {
  const trimmed = input.trim();

  if (!trimmed) {
    console.log('Input cannot be empty.');
    readline.close();
    return;
  }

  try {
    const arr = JSON.parse(trimmed);

    if (!Array.isArray(arr) || !arr.every(arr => Array.isArray(arr))) {
      throw new Error('Input must be an array of arrays.');
    }

    const flatArr = arr.flat();
    console.log(`Concatenated array: [${flatArr.join(', ')}]`);
  } catch (err) {
    console.log('Invalid input:');
  }

  readline.close();
});

