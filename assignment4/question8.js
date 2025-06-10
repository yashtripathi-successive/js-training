//Q8 - Write a program to remove dupliacte elements from an array


let arr = [1,2,1,2,3];
let seen = new Set();

for(let i=0;i<arr.length;i++){
    if(!seen.has(arr[i])){
        seen.add(arr[i]);
    }
}

let ans = "";
for(let x of seen){
    ans+=x+" ";
}
console.log(ans);
