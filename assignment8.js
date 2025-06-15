// find error and rectify them

//Q1 - 
let myArray = [1, 2, 3, 4];
for (let i = 0; i <= myArray.length; i++) {
   console.log(myArray[i]);
} 
// the above code gives 'undefined' duo to '=' sign in loop's condition 

//rectified code 

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

// this gives output : 1 2 3 4 



//Q2 -
let myObject = { name: 'John', age: 30 };
for (property in myObject) {
   console.log(property + ': ' + myObject.property);
}

// the above code gives this output : name: undefined
//                                    age: undefined


//rectified code
let myObject = { name: 'John', age: 30 };
for ( let property in myObject) {
   console.log(property + ': ' + myObject[property]);
}
//output : name: John
//         age: 30



//Q3 - 
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log('The value at index ' + i + ' is: ' + myArray[i]);
}  // No Error Found

// output is : 
// The value at index 0 is: 1
// The value at index 1 is: 2
// The value at index 2 is: 3
// The value at index 3 is: 4


//Q4 - 
let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString);
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
} 
// No Error Found as such but for more validation we can add !isNaN in 2nd part if condition
// like this : 
let myString = 'hello world';
if (myString.length > 0) {
    console.log('The length of the string is: ' + myString.length);
} else {
    console.log('The string is empty');
}

let myNumber = parseInt(myString);
if (!isNaN(myNumber)) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The value is not a number');
}

//output is : The length of the string is: 11
//            The value is not a number



//Q5 -
let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
   console.log(myArray[i]);
}

let myNumber = myArray[5];
if (myNumber) {
   console.log('The number is: ' + myNumber);
} else {
   console.log('The number is undefined');
}
// No Error found
// output is :
// 1
// 2
// 3
// 4
// The number is undefined




//Q6 - 
var person = { 
    name: "John Doe", 
    age: 30, 
    getDetails: function() { 
        console.log(this.name + " is " + this.age + " years old"); } 
};
var getPersonDetails = person.getDetails;
getPersonDetails();

// error is there : undefined is undefined years old

// rectified code
var person = { 
    name: "John Doe", 
    age: 30, 
    getDetails: function() { 
        return `${this.name} is ${this.age} years old `
        } 
};

console.log(person.getDetails()); 

//output : John Doe is 30 years old 


//Q7 - 
for (var i = 0; i < 10; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 1000); 
}
// this prints 10 ten times 

//rectified code

for (let i = 0; i < 10; i++) {
    setTimeout(function() { 
        console.log(i); 
    }, 1000); 
}
//insttead of var we use let in order to print 0,1,2,3,4,5,6,7,8,9 


//Q8 - 

function Person(name, age) { 
    this.name = name; 
    this.age = age;
    }
Person.prototype.getDetails = function() {
   console.log(this.name + " is " + this.age + " years old");
};
var person = new Person("John Doe", 30);
delete person.name;
person.getDetails();
 // its correct and its output is : undefined is 30 years old


 //Q9 -
 function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    
}
var person = Person("John Doe", 30);
console.log(person.name);// error found 

//rectified code
function Person(name, age) { 
    this.name = name; 
    this.age = age; 
    
}
var person = new Person("John Doe", 30);
console.log(person.name);
//output is : John Doe



//Q10 - 
function getData(callback) {
   setTimeout(function() { 
       callback([1, 2, 3, 4, 5]); 
   }, 1000);
}
getData(function(data) {
   console.log(data.length);
});
// No Error found
// output is : 5


//Q11 - 
var promise = new Promise(function(resolve, reject) {
   setTimeout(function() { 
       resolve("Data received"); 
   }, 1000);
});
promise.then(function(data) {
   console.log(data);
}, function(error) {
   console.log(error);
});
// No Error found
// output is : Data received


//Q12 - 
 async function getData() {
   setTimeout(function() { 
       return [1, 2, 3, 4, 5]; 
       
   }, 1000); 
     
 }
getData().then(function(data) {
   console.log(data);
});// error found - output is : undefined  
// here setTimeout is asynchronous but it doesnt return promise so thats why promise chaining is of no use and same with async

// rectified code
async function getData() {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5]);
    }, 1000);
  });
}

getData().then((data) =>  {
  console.log(data); 
});
// output is : // [1, 2, 3, 4, 5] 