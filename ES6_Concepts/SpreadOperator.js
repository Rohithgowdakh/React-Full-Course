const arr1=[1,2,3]
console.log(...arr1);

console.log([...arr1]);//

const arr2=[4,5,6]

console.log([...arr1,...arr2]);// it returns combined new array

console.log([12,22,...arr1,33,43,...arr2,5,6]);
