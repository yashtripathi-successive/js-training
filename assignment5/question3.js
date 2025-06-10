//Q3 - Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const obj = [
    {name:"yash", age:21,id:1},
    {name:"anany", age:22,id:2}
]

const newObj = obj.map(({id,...rest}) => {
      return rest;
})

console.log(newObj);
