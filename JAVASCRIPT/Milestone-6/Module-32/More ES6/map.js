
/* const numbers = [4,6,8,10];
const output2 = [];

const doubleIt = number => number*2;
for(const number of numbers){
    const result = doubleIt(number);
    output2.push(result);
    
}
console.log(output2); */

//1.loop korechi
//2.element diye function ke call korechi
//3. result ke ekta array er moddhe push korechi





// 1st method of map function
/* const numbers = [4,6,8,10];
const output = numbers.map(function(number){
    return number*2;
})

console.log(output); */


// 2nd method

/* const numbers = [3,6,8,10];
const doubleIt = number => number*2;
const output = numbers.map(doubleIt);
console.log(output); */


// square with map function
 const numbers = [3,6,8,10];
 const squareIt = num => num * num;
 const sqare = numbers.map(squareIt);
 console.log(sqare);
 


