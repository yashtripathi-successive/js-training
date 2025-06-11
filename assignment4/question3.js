//Q3 - Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question('Enter a string to count character frequency: ', (name) => {
  const trimmed = name.trim();


  if (trimmed.length === 0) {
    console.log('input cannot be empty.');
    readline.close();
    return;
  }
  if (!/^[a-zA-Z]+$/.test(trimmed)) {
    console.log('input must contain only alphabets.');
    readline.close();
    return;
  }

  let countFrequency = new Map();
  for (let i = 0; i < trimmed.length; i++) {
    if (countFrequency.has(trimmed[i])) {
      countFrequency.set(trimmed[i], countFrequency.get(trimmed[i]) + 1);
    } else {
      countFrequency.set(trimmed[i], 1);
    }
  }

  let ans = "";
  for (let [key, value] of countFrequency.entries()) {
    ans += `${key}${value}`;
  }

  console.log(`${trimmed} : ${ans}`);
  readline.close();
});



