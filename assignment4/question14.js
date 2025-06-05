const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('enter arr: ', (input) => {
  let arr = input.split('').map((val)=>{
     return Number(val);
  })
  console.log(arr);
  
  const reverse = (arr) => {
      let start=0;
      let end=arr.length-1;
      while(start<end){
          swap(arr,start,end);
          start++;
          end--;
      }
  }
  
  const swap  = (arr,start,end) => {
      let temp = arr[start];
      arr[start]=arr[end];
      arr[end]=temp;
  }
  reverse(arr);
  console.log(arr);
  readline.close();
});


    
