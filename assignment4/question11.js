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
    let arr = JSON.parse(trimmed);
    if (
      !Array.isArray(arr) ||
      arr.some((ele) => Array.isArray(ele)) || 
      arr.some((ele) => typeof ele !== 'number' || isNaN(ele)) 
    ) {
      throw new Error('Input must be a 1D array ');
    }

    console.log(`[${arr}]`);
    
    for(let i=0; i < arr.length - 1; i++){
      for(let j=0; j < arr.length - 1 - i; j++){
          if(arr[j] > arr[j+1]){
               let temp = arr[j];
               arr[j] = arr[j+1];
               arr[j+1] = temp;
          }
      }
    }
    console.log(`sorted arr : ${arr}`);

  } catch (err) {
    console.log('error');
  }

  readline.close();
});
