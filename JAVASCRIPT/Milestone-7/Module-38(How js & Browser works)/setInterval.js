

/* console.log("first");

let seconds = 0;

setInterval(()=>{
    seconds++;
    console.log(seconds);
},1000)

console.log("third"); */



//to stop this interval

/* console.log("first");

let seconds = 0;

const timeId= setInterval(()=>{
    seconds++;
    console.log(seconds);
    if(seconds==5){
        clearInterval(timeId);
    }
},1000)

console.log("third"); */




// seconds++
console.log("first");

let seconds = 0;

const timeId= setInterval(()=>{
    
    console.log(seconds++);
    if(seconds==5){
        clearInterval(timeId);
    }
},1000)

console.log("third");


//++seconds 

console.log("first");

let seconds = 0;

const timeId= setInterval(()=>{
   
    console.log(++seconds);
    if(seconds==5){
        clearInterval(timeId);
    }
},1000)

console.log("third");