//Q4 - Write a program deepClone that takes an object as input and returns a deep copy of that object. 
//     The function should handle nested objects and arrays.

const obj = {
  name: "yash",
  age: 21,
  id: 1,
  hobbies: ["reading", "gaming", { type: "sports", name: "football" }],
  country: {
    asia: "china",
    africa: "south africa",
  },
};

const shallowcopy = obj;
shallowcopy.country.asia = "pakistan";       
shallowcopy.hobbies[2].name = "cricket";  

console.log(obj);

console.log("Shallow copy:");
console.log(shallowcopy);


const deepcopy = JSON.parse(JSON.stringify(obj));
deepcopy.country.asia = "afghanistan"; 
deepcopy.hobbies[2].name = "basketball"; 


console.log(obj);

console.log("Deep copy:");
console.log(deepcopy);


//shallow copy affects original one 
//deep copy doesn't affect original one
