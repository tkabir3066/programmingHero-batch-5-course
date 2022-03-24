
// leap year


function isLeapYear(year){
    if(year%4==0 && year%400==0){
        return true;
    }
    
    else{
        return false;
    }
}

const myYear = parseInt(prompt("Enter a Year : "));
const isYearLeapYear = isLeapYear(myYear);
console.log("Leap year = " , isYearLeapYear);