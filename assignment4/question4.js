//Q4 - Write a program to convert given string to upperCase OR lowerCase


const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askName() {
  readline.question('What is your name: ', (name) => {
    const trimmedName = name.trim();

    const isValid = /^[A-Za-z\s]+$/.test(trimmedName);

    if (!isValid) {
      console.log('Please enter a valid name ');
      askName(); 
    } else {
      let capitalName = trimmedName.toUpperCase();
      let smallName = trimmedName.toLowerCase();

      console.log(`Name in capital is like: ${capitalName} and name in small is like: ${smallName}`);
      readline.close();
    }
  });
}

askName();

