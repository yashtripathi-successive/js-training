
//Q1

const res_sum = (a,b) => {
    return a+b;
}
const res_subtract = (a,b) => {
    return a-b;
}

const res_multiply = (a,b) => {
    return a*b;
}

const res_divide = (a,b) => {
    return a/b;
}


const calculator = (a,b) => {
    let res_sum = sum(a,b);
    console.log(res_sum);

    let res_subtract = res_subtract(a,b);
    console.log(res_subtract);

    let res_multiply = res_multiply(a,b);
    console.log(res_multiply);

    let res_divide = res_divide(a,b);
    console.log(res_divide);
}

let a = Number(prompt("enter num 1: "));
let b = Number(prompt("enter num 2: "));

calculator(a,b);


//Q2

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


//Q3

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


//Q4 Q5

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


//Q6


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


//Q7

let num = 2;
while(num<=4096){
    console.log(num);
    num*=2;
}

//Q8

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



//Q9

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
let n=5;
let res = fibonacci(a,b,n);
console.log(res);
