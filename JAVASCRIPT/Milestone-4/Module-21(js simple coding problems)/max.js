
// process 1

/*
 const business = 500;
 const minister = 450;

  if(business>minister){
      console.log("businner is biger");
  }

  else{
      console.log("minister is bigger")
  }

*/





//  process 2

/* const business = 500;
const minister = 450;
const army = 650;

if(business>minister && business>army){
    console.log("business is bigger");
}

else if(minister>business && minister>army){
    console.log("minister is bigger");
}

else{
    console.log("army is bigger");
} */





// process 3

// const business = 500;
// const minister = 450;
// const army = 650;

// const max = Math.max(business, minister, army);
// console.log("largest ", max);




// max with function

// function largestNumber(num1, num2){
//     if(num1>num2){
//         return num1;
//     }
//     return num2;
// }
// const largest = largestNumber(65,25);
// console.log("Largest ", largest);



//--------- TASK-1-----------//

//Create a function that takes three numbers as input parameter and returns you the largest number of the three.


// function findLargest(num1, num2, num3){
//     if(num1>num2 && num1>num3){
//         return num1;
//     }
//     if(num2>num1 && num2>num3){
//         return num2;
//     }
//     return num3;
// }

// const myNumbers = findLargest(645,156,705);
// console.log("Largest is ", myNumbers);




//---------------TASK-2------------------//

// Write a function to find the smallest of three number.

function findSmallest(num1, num2, num3){
    if(num1<num2 && num1<num3){
        return num1;
    }
    if(num2<num1 && num2<num3){
        return num2;
    }
    return num3;
}

const smallest = findSmallest(256, 235, 105);
console.log("Smallest number ", smallest);