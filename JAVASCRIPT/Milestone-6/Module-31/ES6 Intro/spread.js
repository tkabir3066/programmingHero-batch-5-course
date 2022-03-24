
 const numbers = [25, 30, 45, 65];
//  console.log(numbers);
//  console.log(...numbers);
// const maxInArray = Math.max(numbers);
// console.log(maxInArray); // output = NaN
const maxNumber = Math.max(...numbers);

console.log(`Maximum = ${maxNumber}`);
const max = Math.max(23, 99, 65);
// console.log(max);

const numbers2 = [...numbers,105];
// numbers2.push(105);
console.log(numbers2);