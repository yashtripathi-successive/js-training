
//Q12 - Write a program to display intersection of two array

let arr1 = [1,2,3,4,5];
let arr2 = [1]; 

let seen1 = new Set();
let seen2 = new Set();

for(let i=0;i<arr1.length;i++){
    if(!seen1.has(arr1[i])){
        seen1.add(arr1[i]);
    }
}

for(let i=0;i<arr2.length;i++){
    if(!seen2.has(arr2[i])){
        seen2.add(arr2[i]);
    }
}

let ans = "";

for(let x of seen1){
   if(seen2.has(x)){
    ans+=x+" ";
   }
}

console.log(ans);
