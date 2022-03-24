


var bookPages = ["hablu", "bolod", "choddogusti", "battery", "paracitamol", "gymnasium"];


//index
var batteryIndex = bookPages.indexOf("battery");
// console.log(batteryIndex); //output 3

var bolodIndex = bookPages.indexOf("bolod");
// console.log(bolodIndex); //output 1


var numbers = [45, 65, 74, 87,97];

var index = numbers.indexOf(74);
// console.log(index);

var index = numbers.indexOf(174);
console.log(index); //here output will be -1 because in numbers array , there is not present 174.

var secondIndex = bookPages[2];
// console.log(secondIndex); //output choddogusti

var fourthIndex = bookPages[4];
console.log(fourthIndex); // output paracitamol


// we can change value also
console.log(numbers);
numbers[1] = 95;
numbers[4]= 21;
console.log(numbers); //output will 45, 95, 74, 87, 21
