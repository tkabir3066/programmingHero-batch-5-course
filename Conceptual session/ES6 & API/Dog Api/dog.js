
const loadDogs =()=>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res=> res.json())
    .then(data => displayDogs(data));
}


const displayDogs =(dogList)=>{
    
    const main = document.getElementById('main');
    // console.log(main);
     
    const first10Data = dogList.slice(0,10);
   
     for(const dog of first10Data){
         console.log(dog);
         const div = document.createElement('div');
         div.className = "col-lg-4";
         div.innerHTML = `  
           <h2>${dog.name}</h2>
           <p>${dog.temperament}</P>
           <img width="300 " src="${dog.image.url}">
         
         `;
         main.appendChild(div);
     }

}