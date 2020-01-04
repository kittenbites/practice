function sort(arr){
for(let items = 0; items < arr.length-1; items++){
  for(let index = 0; index< arr.length-items-1;index++){
    if(arr[index]>arr[index+1]){
      let temp = arr[index+1];
      arr[index+1] = arr[index];
      arr[index] = temp;
    }
  }
}
  return arr;
}

var myArray = ['zebra','mouse', 'cat', 'dog', 'bunny','human','abacus'];

console.log("Sort result: ", sort(myArray));
