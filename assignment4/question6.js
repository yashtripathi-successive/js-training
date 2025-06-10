//Q6 - Write a program to find sum of an array


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter array: ', (input) => {
  
  
    
    let newarr = input.split(' ').map(str => Number(str.trim()));;
    
    let sum = 0;
    for(let number of newarr){
        sum+=number;

    }
    console.log(`${sum}`);
    

  readline.close();
});



