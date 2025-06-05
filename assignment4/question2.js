const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
  console.log(`${name}`);
  let words = name.split('');
  
  let ans="";
  
  for(let word of words){
      ans= word +ans;;
      
  }
  let reverse_name = ans.split(' ');
  console.log(reverse_name);
  
  let finalAns="";
  const reverse = (reverse_name) => {
      for(let i=reverse_name.length-1;i>=0;i--){
          finalAns+=reverse_name[i]+" ";
      }
  console.log(finalAns);
  }
  reverse(reverse_name);
  readline.close();
});
