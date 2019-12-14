function arrayReverse(arr){
  const returnArr = [];
  let length =  arr.length;
  while(length--){
    returnArr.push(arr[length]);
  }
  return returnArr;
}

var myArray = ['hello', 45, 'Bob', 'what', '23']

console.log(`Practice 2:
  arrayReverse output: ${ arrayReverse(myArray) }`);
