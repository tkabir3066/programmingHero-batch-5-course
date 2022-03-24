// Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment (i.e. by using the assignment operator), and it can't be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed. 


/* const numbers = [45, 59, 89, 74];
//    numbers = [47, 87, 112]; // re-assign not allowed because fist time declared as a const variable

   numbers.push(105); // allowed because it will be added in the same array but not reassign
   numbers[1] = 222; //allowed because it will be changed the  element in the same array but not reassign
 */

//object

 /*   const student = {
       name : "Tutul",
       age : 25,
       roll : 5,
       job : "intern"
   }

//    student = {     // reassign is not allowed in object
//        name : "Anarul",
//        age : 24,
//        roll: 25
//    }

   student.name = "Atif Islam";
   console.log(student); */




//    const numbers = [45, 59, 89, 74];

//    for(let i=0; i<numbers.length; i++){
//       const number = numbers[i];
      
//       console.log( number);
//    }





/* const numbers = [45, 59, 89, 74];
let sum = 0;

for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    //  console.log(number);
     sum = sum + number;
}
console.log(sum); */

// const y= x => x*x;
// const z= y(5);
// console.log(z);  


