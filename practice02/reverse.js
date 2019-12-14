function arrayReverse(arr){
  const returnArr = [];
  let length =  arr.length;
  while(length--){
    returnArr.push(arr[length]);
  }
  return returnArr;
}

function reverseInPlace(arr) {
  for(let index = 0;index<Math.floor(arr.length/2);index++){
    const temp = arr[index];
    arr[index] = arr[arr.length-index-1];
    arr[arr.length - index - 1] = temp;
  }
  return arr;
}

var myArray = ['hello', 45, 'Bob', 'what', '23',45]

console.log(`Practice 2:
  arrayReverse output: ${ arrayReverse(myArray) }`);

console.log(`Practice 2:
  reverseInPlace output: ${ reverseInPlace(myArray)}`);
