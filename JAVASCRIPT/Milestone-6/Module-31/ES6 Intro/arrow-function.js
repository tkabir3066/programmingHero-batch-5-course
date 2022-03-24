

//simple function declaration
/* function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

const result = add(15,17);
console.log(result); */




// function Expression
const add = function add(num1, num2){
    return num1 + num2;
}

console.log(add(10,15));

//function Expression(Anonymous)

 const add2 = function (num1, num2){
     return num1+num2;
 }
 console.log(add2(25,30));



 //Arrow function

 const addNumber = (num1,num2)=> num1+num2;
 console.log(addNumber(10, 12));

//  or

const mul = (num1,num2) =>{
    return num1*num2;
}

console.log(mul(15,6));


//innerHtml 
const hello = ()=> "Hello World";
document.getElementById("demo").innerHTML = hello();