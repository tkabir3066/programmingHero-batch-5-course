



const loadDog = ()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res=> res.json())
    .then(data=> displayDog(data))
}


 const displayDog = (dogList)=>{
//   console.log(dogList);
const main = document.getElementById('main');
// console.log(main)
 const first10Data = dogList.slice(0, 10);
//  console.log(first10Data);


// console.log(div);

 for(const dog of first10Data){
     console.log(dog);
    const div = document.createElement('div');
      // console.log(div);
    div.className = "col-lg-4";
    div.innerHTML = `
     <h2>${dog.name}</h2>
     <p>${dog.temperament}</p>
     <img width="350" src="${dog.image.url}">
    `;
  
    main.appendChild(div);
 }
 

 }