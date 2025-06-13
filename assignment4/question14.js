////Q14 - Write a program to reverse an array


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter arr : ', (input) => {
  const trimmed = input.trim();

  if (!trimmed) {
    console.log('input cannot be empty.');
    readline.close();
    return;
  }
  try{
  let arr = JSON.parse(trimmed);
  
  if(!Array.isArray(arr)){
      throw new Error('invalid array');
  } else if( arr.some((ele)=> typeof ele !== 'number') ){
      throw new Error('invalid array');
      
  } else if( arr.some((ele)=> Array.isArray(ele))){
      throw new Error('invalid array');
  }
      
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
  
}
catch(error){
    console.log('error');
}

readline.close();
});
