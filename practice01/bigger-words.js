function biggerWords(str,arr){
  return arr.filter((val)=>val.length>str.length)
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']

console.log(`Practice 1:
biggerWords output: ${biggerWords('whales', myArray)}`)
