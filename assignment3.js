
//Q1 - Write a program to perform functionality of a calculator (add,sub,multiply,divide)

const sum = (a,b) => {
    return a+b;
}
const subtract = (a,b) => {
    return a-b;
}

const multiply = (a,b) => {
    return a*b;
}

const divide = (a,b) => {
    return a/b;
}

let a = Number(prompt("enter num 1: "));
let b = Number(prompt("enter num 2: "));
let op = (prompt("enter operator : "));

switch(op){
    case '+': console.log(sum(a,b));
    break;
    case '-': console.log(subtract(a,b));
    break;
    case '*': console.log(multiply(a,b));
    break;
    case '/': console.log(divide(a,b));
    break;
    deafult : console.log("error");
    
}




//Q2 - Write a program to display following output as shown in figure

//  1
//  2 3
//  4 5 6
//  7 8 9 10

//  1
//  2 2
//  3 3 3
//  4 4 4 4

//  1 2 3 4 5
//  1 2 3 4
//  1 2 3
//  1 2
//  1
//  1 2
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5

for(let i=5;i>=1;i--){
    let row = "";
    for(let j=1;j<=i;j++){
           row+=j+" ";
           
    }
    console.log(row);
}
for(let i=2;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
           row+=j+" ";
           
    }
    console.log(row);
}


//Q2
for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
           row+=j+" ";
           
    }
    console.log(row);
}

//Q2 
for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
           row+=i+" ";
           
    }
    console.log(row);
}

//Q2 
let num=1;

for(let i=1;i<=5;i++){
    let row = "";
    for(let j=1;j<=i;j++){
           row+=num+" ";
           num++;
    }
    console.log(row);
}


//Q3 - Write a program to display Diamond Pattern

 //         *
 //       *  *
 //     *  *  *
 //    *  *  *  *
 //  *  *  *  *  *
 //    *  *  *  *
 //     *  *  *
 //      *  *
 //        *

const printpattern = (n) => {
for(let i=1;i<=n;i++){
    let row = "";
    for(let j=1;j<=n-i;j++){
        row+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*";
    }
    console.log(row);
}
for(let i=n-1;i>=1;i--){
    let row = "";
    for(let j=1;j<=n-i;j++){
        row+=" ";
    }
    for(let k=1;k<=2*i-1;k++){
        row+="*";
    }
    console.log(row);
}
}
let n = 5;
printpattern(n);


//Q4 - Write a program to print all even number first and then all odd numbers

//Q5 - Write a program to print all even number first and then all odd numbers using only one iteration 

let evenArr = [];
let oddArr = [];
let arr = [1,2,3,4,5];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        evenArr.push(arr[i]);
    }
    else{
        oddArr.push(arr[i]);
    }
}

let mergedArr = evenArr.concat(oddArr);
console.log(mergedArr);


//Q6 - Write a program to display prime numbers from 1 to 50


const checkprime = (n)=> {
    if(n<=1) return false;
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i === 0) return false;
    }
    return true;
}

const prime = (n) =>{
   for(let i =1;i<=n;i++){
    if(checkprime(i)) console.log("prime number");
    else console.log("not a prime number")
   }
}


let n=50;
prime(n);


//Q7 - Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

let num = 2;
while(num<=4096){
    console.log(num);
    num*=2;
}

//Q8 - Write a program to dispaly number from 1-20 using all types of loops

const printNumber = (n) => {

//using for loop
let resultForLoop = "";
for(let i=1;i<=n;i++){
   resultForLoop+=i+" ";
   
}
console.log(resultForLoop);

//using do while loop
let resultDoWhileLoop = " ";
let j=1;
do{
    resultDoWhileLoop+=j+" ";
    
    j++;
}while(j<=n);
console.log(resultDoWhileLoop);

//using while loop
let resultWhileLoop = " ";
let k=1;
while(k<=n){
    resultWhileLoop+=k+" ";
    k++;
}
console.log(resultWhileLoop);
}

let n = 20;
printNumber(n);



//Q9 - Write a program to print fibonaaci series

const fibonacci = (a,b,n) => {
    for(let i=2;i<=n;i++){
        let temp = a+b;
        a=b;
        b=temp;
    }
    return b;
}

let a=0;
let b=1;
let n=4;
let res = fibonacci(a,b,n);
console.log(res);
