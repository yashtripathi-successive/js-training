//Q5 - Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)




const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askName() {
  readline.question('What is your name: ', (name) => {

    const trimmedName = name.trim();
    const isValid = /^[A-Za-z\s]+$/.test(trimmedName);

    if (!isValid || trimmedName.length === 0) {
      console.log('Please enter a valid string');
      askName(); 
    } else {
      let ans = "";
      for(let i = 0; i < trimmedName.length; i++) {
        if(trimmedName[i] == ' ') {
          ans += trimmedName[i + 1].toUpperCase();
          i++;
        } else {
          ans += trimmedName[i];
        }
      }
      console.log(`${ans}`);
      readline.close();
    }
  });
}

askName();

