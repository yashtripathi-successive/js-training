// Q1 - Write a program to give a random output between 1 to 10

const randomnumber = (number) => {
    if (isNaN(number) || number < 1 || number > 10) {
        console.log("Invalid input. Please enter a valid number between 1 and 10.");
        return;
    }

    let random = Math.floor(Math.random() * number) + 1;
    console.log("Random number between 1 and 10 :", random);
}

let input = Number(prompt("Enter a number between 1 and 10:"));
randomnumber(input);


//Q2  Write a function to take input(age, name, phone no.) from user and display it 

function validateInput() {
 
  while (true) {
    var ageInput = Number(prompt("Enter age between 1 and 100:"));
    
    if (!isNaN(ageInput) && ageInput >= 1 && ageInput <= 100) {
      break;
    } else {
      console.log("Invalid age. Please enter a valid number between 1 and 100.");
    }
  }

 
  while (true) {
    var name = prompt("Enter name : ");
    if (name && /^[A-Za-z]+$/.test(name)) {
      break;
    } else {
      console.log("Invalid name. ");
    }
  }

 
  while (true) {
   var mobileNumberInput = prompt("Enter valid mobile number : ");
   
    if (/^[1-9][0-9]{9}$/.test(mobileNumberInput)) {
      break;
    } else {
      console.log("Invalid mobile number.");
    }
  }

  console.log(ageInput + " " + name + " " + mobileNumberInput);
}

validateInput();






//Q3 - Write a function expression that takes in another function as an argument


function myCallback(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log("Result: ", result);
  }
}

function sum(a, b, callback) {
  if (isNaN(a) || isNaN(b)) {
     return callback("Both inputs must be numbers", null);
   
  }
  callback(null, a + b);
}

function subtract(a, b, callback) {
  if (isNaN(a) || isNaN(b)) {
    return callback("Both inputs must be numbers", null);
    
  }
  callback(null, a - b);
}

const num1 = Number(prompt("enter number 1: "));
const num2 = Number(prompt("enter number 2: "));
sum(num1, num2, myCallback);
subtract(num1, num2, myCallback);




//Q4 - Write a function expression that takes in a number and returns its square.


function getValidNumber(message) {
  let number;

  while (true) { 
    number = Number(prompt(message)); 
    if (number === null) { 
      return null; 
    }

    if (!isNaN(number)) {
      return number; 
    }
    else{
    message = "Invalid input. Please enter a valid number:"; 
    }
  }
}

const square = function(number) {
  if (number === null) {
    return "null value"; 
      
  }
  return number * number;
};

const validNumber = getValidNumber("Enter a number: ");
console.log(square(validNumber));




//Q5 - Write a function expression that takes in two numbers and returns their sum..


const sum = function (...numbers) {
  let total = 0;
  for (let x of numbers) {
    if (typeof x !== 'number' || isNaN(x)) {
      return "Error: All inputs must be valid numbers.";
    }
    total += x;
  }
  console.log(total);
};

console.log("type numbers to know their sum");
let a = prompt("enter a: ");
let b = prompt("enter b : ");

if (isNaN(Number(a)) || isNaN(Number(b))) {
  console.log("Error: Please enter valid numbers.");
} else {
  sum(Number(a), Number(b));
}




//Q6 -  Write a function expression that takes in a number and returns true if it's even and false if it's odd.


let oddeven = function (x) {
  if (typeof x !== 'number' || isNaN(x)) {
    return "Error: Input must be a valid number.";
  }

  if (x % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

console.log("Type a number to know its odd/even ");
let a = prompt("Enter a: ");

if (a === null) {
  console.log("Error."); 
} else if (a.trim() === "") {
  console.log("Error: Number cant be empty."); 
} else if (isNaN(Number(a))) {
  console.log("Error: Please enter a valid number."); 
} else {
  oddeven(Number(a));
}



//Q7 - All of the above questions from 3-6 needs to be done with arrow functions also


//q3 with arrow approch

function myCallback(error, result) {
  if (error) {
    console.error(error);
  } else {
    console.log("Result: ", result);
  }
}

function sum(a, b, callback) {
  if (isNaN(a) || isNaN(b)) {
     return callback("Both inputs must be numbers", null);
   
  }
  callback(null, a + b);
}

function subtract(a, b, callback) {
  if (isNaN(a) || isNaN(b)) {
    return callback("Both inputs must be numbers", null);
    
  }
  callback(null, a - b);
}

const num1 = Number(prompt("enter number 1: "));
const num2 = Number(prompt("enter number 2: "));
sum(num1, num2, myCallback);
subtract(num1, num2, myCallback);


//q4


function getValidNumber(message) {
  let number;

  while (true) { 
    number = Number(prompt(message)); 
    if (number === null) { 
      return null; 
    }

    if (!isNaN(number)) {
      return number; 
    }
    else{
    message = "Invalid input. Please enter a valid number:"; 
    }
  }
}

const square = function(number) {
  if (number === null) {
    return "null value"; 
      
  }
  return number * number;
};

const validNumber = getValidNumber("Enter a number: ");
console.log(square(validNumber));


//q5.


const sum = function (...numbers) {
  let total = 0;
  for (let x of numbers) {
    if (typeof x !== 'number' || isNaN(x)) {
      return "Error: All inputs must be valid numbers.";
    }
    total += x;
  }
  console.log(total);
};

console.log("type numbers to know their sum");
let a = prompt("enter a: ");
let b = prompt("enter b : ");

if (isNaN(Number(a)) || isNaN(Number(b))) {
  console.log("Error: Please enter valid numbers.");
} else {
  sum(Number(a), Number(b));


//q6.


let oddeven = (x) => {
  if (typeof x !== 'number' || isNaN(x)) {
    return "Error: Input must be a valid number.";
  }

  if (x % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

console.log("Type a number to know its odd/even ");
let a = prompt("Enter a: ");

if (a === null) {
  console.log("Error."); 
} else if (a.trim() === "") {
  console.log("Error: Number cant be empty."); 
} else if (isNaN(Number(a))) {
  console.log("Error: Please enter a valid number."); 
} else {
  oddeven(Number(a));
}
