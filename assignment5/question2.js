//Q2 - Write a program to sort an array of object on the basis of age 

const obj = [
    { name: "yash", age: 21 },
    { name: "anany", age: 20 }
];

const isValid = obj.every((item) =>  typeof item === 'object' && item !== null && 'age' in item && 
    typeof item.age == 'number' && 'name' in item && typeof item.name === 'string');
if (isValid) {
     obj.sort((a, b) => a.age - b.age);

     console.log(obj)
}
else{
    console.log('error');
}
