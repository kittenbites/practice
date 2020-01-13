function fibonacci(num){
  let first = 0,
      second = 1,
      temp;
  while (num-->0){
    console.log(first);
    temp = first;
    first = second+temp;
    second = temp;
  }
}

console.log("Fibonacci of 12: ",fibonacci(12));
console.log("Fibonacci of 5: ",fibonacci(5));
