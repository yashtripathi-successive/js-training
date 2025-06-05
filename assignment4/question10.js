const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('type array of arrays :', (input) => {
  let arr = input.split(';').map(row => 
    row.split(',').map(number => Number(number.trim()))
  );

  let flatArr = arr.flat();
  console.log(`[${flatArr}]`);

  readline.close();
});
