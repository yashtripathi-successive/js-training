const inverse = (arr) => {
  let inverseArr = [];
  for (let i = 0; i < arr.length; i++) {
    inverseArr[arr[i]] = i;
  }
  return inverseArr;
}

let arr = [2, 0, 3, 1];
let inversed = inverse(arr);
console.log(inversed); 