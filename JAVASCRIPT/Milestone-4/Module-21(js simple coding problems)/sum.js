
//   const numbers = [75, 45, 25, 65, 105, 26];

//     let sum = 0;

//   for(let i=0; i<numbers.length; i++){
//     const elements = numbers[i];
    
//     sum = sum + elements;
    
      
//   }
//   console.log(sum);



function getSum(numbers){
         
    let sum=0;
    for(let i=0; i<numbers.length; i++){
      const elements = numbers[i];
      sum = sum + elements;
    }
    return sum;
}

const total = getSum([45, 75, 25, 50, 105]);
console.log("total " , total);