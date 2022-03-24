
 //length of string elements in an array

/*  const friends = ["Tutul Kabir", "Anarul Kabir", "Mohit Kumar", "Kasim Ali", "Rabiul Sk"];
 const fLength = friends.map(friend => friend.length);
 console.log(fLength); */


 const products = [
     {name:'Water bottles', price: 50, color: 'yellow'},
     {name:'Mobile phone', price: 15000, color: 'silver'},
     {name:'smart watch', price: 3550, color: 'black'},
     {name:'sticky note', price: 50, color: 'pink'},
     {name:'Water glass', price: 30, color: 'white'},
 ]

//  const productNames = products.map(product=> product.name);
//  const productPrice = products.map(product=> product.price);
//  const productColor = products.map(product=> product.color);
//  console.log(productNames);
//  console.log(productPrice);
//  console.log(productColor);

 products.map(product=> console.log(product));

 //we can apply forEach method alsos
 products.forEach(product => console.log(product));

//map vs forEach => map returns array but forEach does not return array

//filter

const expensive = products.filter(product=> product.price>100);
const balcks = products.filter(product=> product.color=="balck");
const blues = products.filter(product=> product.color=="blue"); // output empty array return korbe karon array moddhe blue color declare kora nei
console.log(expensive);
console.log(balcks);
