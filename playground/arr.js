var arr = [1,1,2,2,3,3,3,4,4,5,5,45];

var newArr = arr.filter( (val) => !arr.includes(val, val));
console.log(newArr);