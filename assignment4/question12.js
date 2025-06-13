
//Q12 - Write a program to display intersection of two array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 5];


function isValidArray(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input is not an array.");
  } else if (arr.length === 0) {
    throw new Error("Array is empty.");
  } else if (!arr.every((item) => typeof item === 'number' && !isNaN(item))) {
    throw new Error("Array must contain only valid numbers.");
  } else{
      return arr;
  }
}


try{
  if(isValidArray(arr1) && isValidArray(arr2)) {
  
  let seen1 = new Set([...arr1]);
  let seen2 = new Set([...arr2]);

  let ans = "";

  for (let x of seen1) {
    if (seen2.has(x)) {
      ans += x + " ";
    }
  }

  console.log(ans.trim()); 
}
}
catch(error){
    console.log('error');
}


