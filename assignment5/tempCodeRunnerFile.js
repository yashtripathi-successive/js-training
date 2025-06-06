const obj = {
    name:"yash", 
    age:21,
    id:1,
    country : {
        asia : "china",
        africa : "south africa"
    }
   
}
const shallowcopy = {...obj}
shallowcopy.country.asia = "pakistan";

console.log(obj);
console.log(shallowcopy)

const deepcopy = JSON.parse(JSON.stringify(obj));
deepcopy.country.asia = "afganistan";

console.log(obj);
console.log(deepcopy)
