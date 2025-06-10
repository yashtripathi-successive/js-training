
//Q11 - Write a program to sort an array (bubble sort)

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
  
  for(let i=0;i<flatArr.length -1 ;i++){
      for(let j=i+1;j<flatArr.length ;j++){
          if(flatArr[j]<flatArr[i]){
               let temp = flatArr[i];
               flatArr[i] = flatArr[j];
               flatArr[j] = temp;

          }
      }
  }
  console.log(`sorted arr : ${flatArr}`);

  readline.close();
});


    
