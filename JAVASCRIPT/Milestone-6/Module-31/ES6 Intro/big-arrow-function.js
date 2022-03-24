
 const add = (num1, num2) => num1 + num2;
 const sum = add(22,15);
 console.log(sum);


 const multiply = (num1, num2, num3)=>num1*num2*num3;
 const result = multiply(10,12,11);
 console.log(`Result = ${result}`);


 const tenTimes = (num)=>num*10;
 const outPut = tenTimes(15);
 console.log(`Output = ${outPut}`);
        //  OR
 const fiveTimes = num => num*5;
 const value = fiveTimes(12);
 console.log(`value = ${value}`);


 const getName = () => "Brandon Rodgers";
 const name = getName();
 console.log(`name = ${name}`);



 //multilines operation

 const doMath = (x,y) => {
     const sum = x+y;
     const diff = x-y;
     const multiply = diff *5;
     const output = multiply/2;
     return output;
 }
  const Result = doMath(12,5);
  console.log(`result is ${Result}`);