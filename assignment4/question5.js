const { log } = require('console');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
    
    let ans = "";
    for(let i=0;i<name.length;i++){
       if(name[i]==' '){
        ans+=name[i+1].toUpperCase();
        i++;
       }
       else{
        ans+=name[i];
       }
    }
   console.log(`${name} -> ${ans}`);
   readline.close();
});
