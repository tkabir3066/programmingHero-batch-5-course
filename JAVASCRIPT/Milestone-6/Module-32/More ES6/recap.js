//1. let and const
const shirt = 550;
let phone = 10000;
phone = 8500;

//2. default parameter

function myInfo(a, text = 'Hello world'){
        console.log(`a= ${a}, text = ${text}`);
}

myInfo(7);
myInfo(7,"ami tomai bhalobashi");
//3.Template string

// 4.Arrow function

//5. spread operator
function maxNumber(array =[]){
    const max = Math.max(...array)
}

const biggest = maxNumber();
console.log(biggest);