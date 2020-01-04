function groupArray(arr){
  let returnArr = [];
  const typeMap = {};
  for (let item of arr){
    if (!typeMap[typeof (item)]){
      typeMap[typeof(item)] = [];
    }
    typeMap[typeof (item)].push(item);
  }
  for(let typeArr in typeMap){
    returnArr.push(typeMap[typeArr]);
  }
  return returnArr;
}
var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
console.log("groupArray result:", groupArray(myArray));
