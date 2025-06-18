
//Q2 - Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('What is your name: ', (name) => {
  const trimmed = name.trim();

  if (trimmed.length === 0) {
    console.log('input cant be empty');
    readline.close();
    return;
  }
  if (!/^[a-zA-Z\s]+$/.test(trimmed)) {
    console.log('Input must contain only alphabets ');
    readline.close();
    return;
  }

  let words = trimmed.split(' ');
  let result = "";

  for (let word of words) {
    let reversedWord = "";
    for (let char of word) {
      reversedWord = char + reversedWord;
    }
    result += reversedWord + " ";
  }

  console.log(result.trim());

  readline.close();
});

 
