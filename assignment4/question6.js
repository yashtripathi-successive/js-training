//Q6 - Write a program to find sum of an array


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumDigits(str) {
  return [...str].reduce((sum, val) => sum+ Number(val), 0);
}

function sumFromString(input) {
  const trimmed = input.trim();
  if (/^\d+$/.test(trimmed)) return sumDigits(trimmed);

  const parts = trimmed.split(/\s+/);
   for (const s of parts) {
    if (s === '' || isNaN(s)) return null;
  }

  return parts.reduce((sum, val) => sum + Number(val), 0);
}

function askInput() {
  readline.question('Enter numbers: ', input => {
    const result = sumFromString(input);
    if (result === null) {
      console.log('Invalid input!');
      askInput();
    } else {
      console.log(`Sum is: ${result}`);
      readline.close();
    }
  });
}

askInput();




