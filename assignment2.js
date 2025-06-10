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

let age= Number(prompt("enter age: "));
let name = prompt("enter name: ");
let mobileno = Number(prompt("enter mobile number: "));


console.log(age + " " + name + " " + mobileno);




//Q3 - Write a function expression that takes in another function as an argument


function sayhello(){
    return "hello";
}

let saymyname = function (sayhello){
   sayhello();
   console.log(sayhello() + " "+ "my name is yash");
   
}

saymyname(sayhello);



//Q4 - Write a function expression that takes in a number and returns its square.



let tellsquare = function (a){
    console.log(a*a);
}

let a= prompt("enter number to know its square");
tellsquare(a);


//Q - Write a function expression that takes in two numbers and returns their sum..


const sum = function (...numbers){
    
  let total =0;
  for(let x of numbers){
      total+=x;
  }
  console.log(total);
    
    
}

console.log("type numbers to know their sum");
let a= Number(prompt("enter a: "));
let b= Number(prompt("enter b : "));
sum(a,b);



//Q6 -  Write a function expression that takes in a number and returns true if it's even and false if it's odd.


let oddeven = function (x){
      if(x%2==0){
          console.log("even");
      }
      else {
          console.log("odd");
      }
}

console.log("type number to know their odd/even status");
let a= Number(prompt("enter a: "));

oddeven(a);


//Q7 - All of the above questions from 3-6 needs to be done with arrow functions also


//q3 with arrow approch

const sayhello = () => {
    return "hello";
}

const saymyname = (sayhello) => {
   sayhello();
   console.log(sayhello() + " "+ "my name is yash");
   
}

saymyname(sayhello);


//q4


const tellsquare = (a) => {
    console.log(a*a);
}

let a= prompt("enter number to know its square");
tellsquare(a);


//q5.


const sum = (...numbers) => {
    
  let total =0;
  for(let x of numbers){
      total+=x;
  }
  console.log(total);
    
    
}

console.log("type numbers to know their sum");
let a= Number(prompt("enter a: "));
let b= Number(prompt("enter b : "));
sum(a,b);


//q6.

const oddeven = (x) => {
      if(x%2==0){
          console.log("even");
      }
      else {
          console.log("odd");
      }
}

console.log("type number to know their odd/even status");
let a= Number(prompt("enter a: "));

oddeven(a);
