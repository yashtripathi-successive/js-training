//Q4 - Write a program deepClone that takes an object as input and returns a deep copy of that object. 
//     The function should handle nested objects and arrays.



const obj = {
  name: "yash",
  age: 21,
  id: 1,
  hobbies: ["reading", "gaming"],
  country: {
    asia: "china",
    africa: "south africa",
  },
};

const isValid = obj && typeof obj === 'object' &&
  'name' in obj && typeof obj.name === 'string' &&
  'age' in obj && typeof obj.age === 'number' &&
  'id' in obj && typeof obj.id === 'number' &&
  'hobbies' in obj && Array.isArray(obj.hobbies) &&
  'country' in obj && typeof obj.country === 'object' && obj.country !== null &&
  typeof obj.country.asia === 'string' &&
  typeof obj.country.africa === 'string';

if(isValid){
const shallowcopy = {...obj};
shallowcopy.country.asia = "pakistan";       
shallowcopy.hobbies[1] = "cricket";  


console.log(obj);

console.log("Shallow copy:");
console.log(shallowcopy);


const deepcopy = JSON.parse(JSON.stringify(obj));
deepcopy.country.asia = "afghanistan"; 
deepcopy.hobbies[1] = "basketball"; 


console.log(obj);

console.log("Deep copy:");
console.log(deepcopy);




const deepcopy2 = structuredClone(obj);
deepcopy2.country.asia = "afghanistan"; 
deepcopy2.hobbies[1] = "basketball"; 


console.log(obj);

console.log("Deep copy 2:");
console.log(deepcopy2);
}

else{
    console.log('error found');
}

//shallow copy affects original one 
//deep copy doesn't affect original one
