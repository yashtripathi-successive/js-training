//Q3 - Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const obj = [
  { name: "yash", age: 21, id: 1 },
  { name: "anany", age: 22, id: 2 }
];


const isValid = obj.every((item) =>
  typeof item === 'object' && item !== null &&
  'name' in item && typeof item.name === 'string' &&
  'age' in item && typeof item.age === 'number' &&
  'id' in item && typeof item.id === 'number');

if (isValid) {
  const newObj = obj.map(({ id, ...rest }) => {
      delete id;
      return rest
  });

  console.log(newObj);
} else {
  console.log("Error found");
}
