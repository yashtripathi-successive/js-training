//Q1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")



const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter a string : ', (input) => {
  const trimmed = input.trim();

  
  if (!trimmed || !/^[a-zA-Z\s]+$/.test(trimmed)) {
    console.log('please enter a valid string with letters only ');
  } else {
    let seen = new Set();
    let result = "";

    for (let char of trimmed) {
      if (!seen.has(char)) {
        seen.add(char);
        result += char;
      }
    }

    console.log(`Result : ${result}`);
  }

  readline.close();
});
