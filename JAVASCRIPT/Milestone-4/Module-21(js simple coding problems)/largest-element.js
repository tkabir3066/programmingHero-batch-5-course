
 

// function largestElement(numbers){
//     let largest =numbers[0];
//  for(let i=1; i<numbers.length; i++){
//      const element= numbers[i];
//     if(element>largest){
//         largest = element;
//     }
//  }
//  return largest;
// }

// const ages = [12, 54, 2, 34, 75, 32, 12];
// const oldest = largestElement(ages);
// const oldest2 = largestElement([-12, -6, -17, -2]);
// console.log("Largest ", oldest2);






 //----------TASK------------//
 // Find the lowest element of an array

function lowestElement(numbers){
    let lowest= numbers[0];
    for(let i=1; i<numbers.length; i++){
        const element = numbers[i];
        if(element<lowest){
            lowest = element;
        }
    }
 return lowest;
}

const myArray = [13,25,45,5,49];
const lowestNumber = lowestElement(myArray);
console.log("lowet ", lowestNumber);