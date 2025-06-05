let arr = [1,2,1,2,1];
let seen = new Set();

for(let i=0;i<arr.length-1;i++){
    if(!seen.has(arr[i])){
        seen.add(arr[i]);
    }
    else{
     console.log(`${arr[i]} has a first index at ${arr.indexOf(arr[i])}`) 
    }
}