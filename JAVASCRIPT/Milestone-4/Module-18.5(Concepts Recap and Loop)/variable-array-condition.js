
var bottleColor = "yellow";
var waterQuantity = 1;
var isFall = false;

//array

var items = ["bottle", "mug", "paper", "pen"];
items.indexOf("paper");// 2
items.indexOf("logens");// -1
items.push("envelope")//to add new items  in the last of array
items.pop();//to remove an element from the last of array


//conditional
if(items.length>= 4){
    console.log("you have too many stuff on your desk.");
}

else if(items.length == 4){
 console.log("You only have one hali items");
}

else{
    console.log("wow! you have aclean desk.");
}
