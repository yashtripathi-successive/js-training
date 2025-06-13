//Q6 - Write a program to find sum of an array


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function sumDigits(arr) {
  return [...arr].reduce((sum, val) => sum+ Number(val), 0);
}

function askInput() {
  readline.question('Enter numbers: ', input => {
      
  try{    
     let arr =JSON.parse(input);
     if(!Array.isArray(arr)){
         throw new Error('not an array');
     }
     else if(arr.some((ele)=> typeof ele !== 'number')){
         throw new Error('not an number');
     }
     else if(arr.some((ele)=> Array.isArray(ele))){
         throw new Error('not an 1d array');
     }
     else{
      const result = sumDigits(arr);
    
      console.log(`Sum is: ${result}`);
      readline.close();
    }
     
  }
  
 

catch(error){
    console.log('error');
}

 });
}
askInput();


