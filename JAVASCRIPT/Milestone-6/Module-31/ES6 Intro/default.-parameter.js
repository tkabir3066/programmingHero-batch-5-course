
 /* function add(num1, num2){
     const total = num1 + num2;
     return total;
 }
 const result = add(15,17);
 console.log(result); */




 /* function add(num1, num2){

    // console.log(num1, num2);
    if(num2==undefined){
        num2=0;
    }
     const total= num1+num2;
     return total;
 }

 const result = add(15);
 console.log(result); */


       //OR//OR//OR

 /* function add(num1, num2){

    
      num2= num2||0;
     const total= num1+num2;
     return total;
 }

 const result = add(15);
 console.log(result); */



 //Default parameter

/*  function add(num1, num2=0){

   const total= num1+num2;
   return total;
}

const result = add(15);
console.log(result); //15
 */


// or//or

/* function add(num1, num2=0){
   const total= num1+num2;
   return total;
}

const result = add(15,17); //32
console.log(result); */




function fullName(firstName , lastName='Ali'){
    const name = firstName + ' '+ lastName;
    return name;

}

const fullName1 = fullName("Tutul", "Kabir");
console.log(fullName1);