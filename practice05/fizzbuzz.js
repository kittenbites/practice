function fizzBuzz(){
  let count = 0;
  let output = '';
  while( count++ < 100){
  if(!(count%3+count%5)){
    output = 'FizzBuzz';
  } else if (!(count%3)){
    output = 'Fizz';
  } else if (!(count % 5)) {
    output = 'Buzz';
} else{
  output = count;
}
console.log(count+': '+output)}
}

fizzBuzz();
