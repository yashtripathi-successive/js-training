//Q8 - Write a program to remove dupliacte elements from an array

let arr = [1, 2, 1, 2, 3];
let seen = new Set();
let ans = "";
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
    console.error(`Invalid element found`);
   return;
  }
   
  if (!seen.has(arr[i])) {
    seen.add(arr[i]);
  }else{
      ans+=arr[i]+' ';
  }
}



console.log(ans.trim());

