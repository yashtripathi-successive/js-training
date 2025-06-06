const obj = [
    {name:"yash", age:21,id:1},
    {name:"anany", age:22,id:2}
]

const newObj = obj.map(({id,...rest}) => {
      return rest;
})

console.log(newObj);