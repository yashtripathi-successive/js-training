const { log } = require('console');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
  let capitalName = name.toUpperCase();
  let smallName = name.toLowerCase();

  console.log(`name in capital is liek : ${capitalName} and name in small is like ${smallName}`);
  

  readline.close();
});
