//Q2 - Write a program to sort an array of object on the basis of age 

const obj = [
    {name:"yash", age:21},
    {name:"anany", age:22}
]


obj.sort((a,b)=> a.age - b.age)

obj.forEach((val) => {
console.log(`${val.name} -> ${val.age}`);
})
