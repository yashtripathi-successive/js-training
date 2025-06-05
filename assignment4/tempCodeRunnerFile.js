const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
  
  let countFrequency = new Map();
  for(let i=0;i<name.length;i++){
      if(countFrequency.has(name[i])){
          countFrequency.set(name[i] , countFrequency.get(name[i])  + 1);
      }
      else{
          countFrequency.set(name[i],1);
      }
  }
  
 let ans = ""; 
for(let [key,value] of countFrequency.entries() ){
    
    ans+=`${key}${value}`;
    
}
  console.log(`${name} : ${ans}`);
  readline.close();
});



