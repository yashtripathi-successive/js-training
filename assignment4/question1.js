const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  let words = name.split("");


let seen = new Set();
let finalAns="";
for(let word of words){
    let ans = "";
    for(let i=0;i<word.length;i++){
        if(!seen.has(word[i])){
            seen.add(word[i]);
            ans+=word[i];
        }
        
    }
    
    finalAns+=ans;
}
console.log(finalAns);

  readline.close();
});
