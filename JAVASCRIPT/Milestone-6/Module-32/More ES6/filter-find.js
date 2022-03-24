
//filter

const numbers = [5,13,7,41,29,79];
let bigNumbers =numbers.filter(number=>number>10);
let smallNumbers =numbers.filter(number=>number<10);
console.log(bigNumbers);
console.log(smallNumbers);


//filter vs find

// filter array return kore but find sorasori element return kore
//find er khetre condition fulfill na korle  undefined dekhabe