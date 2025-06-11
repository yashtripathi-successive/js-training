//Q11 - Write a program to sort an array (bubble sort)

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('type array of arrays :', (input) => {
  const trimmed = input.trim();

  if (!trimmed) {
    console.log('input cannot be empty.');
    readline.close();
    return;
  }

  try {
    let arr = trimmed.split(';').map(row => 
      row.split(',').map(number => {
        const num = Number(number.trim());
        if (isNaN(num)) {
          throw new Error(`invalid number: `);
        }
        return num;
      })
    );

    let flatArr = arr.flat();
    console.log(`[${flatArr}]`);
    
    for(let i=0; i < flatArr.length - 1; i++){
      for(let j=0; j < flatArr.length - 1 - i; j++){
          if(flatArr[j] > flatArr[j+1]){
               let temp = flatArr[j];
               flatArr[j] = flatArr[j+1];
               flatArr[j+1] = temp;
          }
      }
    }
    console.log(`sorted arr : ${flatArr}`);

  } catch (err) {
    console.log(err.message);
  }

  readline.close();
});
