//1

const randomnumber = (number) => {
    let random = Math.random() * number + 1;
    console.log("Random number:", random);

}
let number = Number(prompt("enter number: "));
randomnumber(number);


//2

let age= Number(prompt("enter age: "));
let name = prompt("enter name: ");
let mobileno = Number(prompt("enter mobile number: "));


console.log(age + " " + name + " " + mobileno);




//3.

function sayhello(){
    return "hello";
}

function saymyname(sayhello){
   sayhello();
   console.log(sayhello() + " "+ "my name is yash");
   
}

saymyname(sayhello);



//4.



function tellsquare(a){
    console.log(a*a);
}

let a= prompt("enter number to know its square");
tellsquare(a);


//5.


// function sum(a,b){
//     let res = a+b;
//     console.log(res);
// }

function sum(...numbers){
    
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



//6.
function oddeven(x){
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


//7.

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