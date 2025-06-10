//Q1 - Write a program to iterate over object.

const obj = {
    name:"yash",
    age:21
}

for(let key in obj){
    console.log(`obj has : ${key} ->  ${obj[key]} `)
}
