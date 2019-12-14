function biggerWords(str,arr){
  return arr.filter((val)=>val.length>str.length)
}

function biggerWords2(str,arr){
  let returnArr = []
  for(let word of arr){
    if (word.length>str.length){
      returnArr.push(word);
    }
  }
  return returnArr;
}

var myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles']

console.log(`Practice 1:
biggerWords output: ${biggerWords('whales', myArray)}
biggerWords2 output: ${biggerWords2('whales', myArray)}`)
