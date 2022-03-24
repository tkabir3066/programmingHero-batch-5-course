
// even

function isEven(number){
    if(number%2==0){
        return true;
    }
    return false;
}


 var myNumber = parseInt(prompt("Enter a number : "));
 var isMyNumberEven = isEven(myNumber);
 console.log("Is my number Even = " ,isMyNumberEven);


//  odd

function isOdd(number){
    if(number%2 !=0){
        return true;
    }
    return false;
}

// var myNumber = parseInt(prompt("Enter a number : "));
var isMyNumberOdd = isOdd(myNumber);
console.log("Is my number odd = " , isMyNumberOdd);




