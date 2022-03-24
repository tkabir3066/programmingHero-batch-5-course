

 //declare variable based on the name of an object property
/* 
 const myObject = {x:2, y:50, z: 600, a:25, b:65};
 const {x,y,z,a,b} = myObject;

     console.log(x);
     console.log(y);
     console.log(z);
     console.log(a);
     console.log(b); */


//destructuring array
/* 
const [p,q] = [45, 37,91,86];
console.log(p,q); */



const [best, faltu] = ["Momotaj", "Poroshi"];
// console.log(best, faltu);


const {sky, color, soil, money} = {sky:'blue', soil:"mati", color: 'red', money:500};



//chaining 
 const company = {
     name : 'GP',
     ceo : {
         id:1, 
         name: "Tutul",
         gpa: 2.56
     },

     web: {
         work: "Web Developement",
         employee: 22,
         framework: "react",
         tech: {
             first: 'html',
             second: "css",
             third: "js"
         }
     },
 };

//  console.log(company.web.tech.third);
//  console.log(company.web.framework);
//  console.log(company.ceo.id);


 //search on google : what is optional chaining in js

 console.log(company.web ?.backend?.tech?.third); // ? is optional chaining