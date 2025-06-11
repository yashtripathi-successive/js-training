const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Type an array of arrays : ', (input) => {
  const trimmed = input.trim();

  
  if (!trimmed) {
    console.log('input cannot be empty.');
    readline.close();
    return;
  }

  try {
    
    const arr = trimmed.split(';').map(row =>
      row.split(',').map(number => {
        const num = Number(number.trim());
        if (isNaN(num)) {
          throw new Error(`Invalid number:`);
        }
        return num;
      })
    );

   
    const flatArr = arr.flat();
    console.log(`concatenated array: [${flatArr.join(', ')}]`);
  } catch (err) {
    console.log(err.message);
  }

  readline.close();
});
