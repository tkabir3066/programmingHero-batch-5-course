
  const phonediv = document.getElementById('phone-container');
  const detailsDiv = document.getElementById("details");
  const error = document.getElementById('error');
// button handler
const loadPhone = ()=>{
    const searchField = document.getElementById('search-field');
    const inputText = searchField.value;
    
    phonediv.innerHTML = '';
    detailsDiv.innerHTML = '';
    if( inputText == "" ){
        error.innerText = "You have not entered any product";
        searchField.value = '';
        
    }
    
    else{
      const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayPhone(data.data));
    error.innerHTML = '';
    searchField.value = '';
    }
   
   
}



const displayPhone = (phones) =>{
    phones = phones.slice(0,20);
    // console.log(phones)

  
        
     for(const phone of phones){
        // console.log(phone);
        
          const div= document.createElement('div');
          div.classList.add("col-lg-4");
          div.classList.add("mb-5");
          div.classList.add("mt-5");
          div.innerHTML = `
          <div class="card border-1 bg-light " style="width: 15rem;">
          <img src="${phone.image}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title text-center">${phone.phone_name}</h5>
            <h6 class="card-text text-center"><strong>Brand: </strong>${phone.brand}</h6>
            <button onclick="phoneDetails('${phone.slug}')" href="" class="btn btn-success mx-auto d-block">See Details</button>
       </div>
   </div>
         
         `;

     phonediv.appendChild(div);
        }
          
     }




const phoneDetails = (id)=>{
//   console.log(id);
const url = `https://openapi.programming-hero.com/api/phone/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data =>displayDetails(data.data))
     
    

}


const displayDetails = (code)=>{
   console.log(code)
 
  const div = document.createElement('div');
  div.classList.add("col-lg-4");
  div.classList.add("mb-5");
  div.classList.add("mt-5");
  div.innerHTML = ` 
  <div class="card border-1 bg-light " style="width: 15rem;">
  <img src="${code.image}" class="card-img-top" alt="">
  <div class="card-body ">
    <h6 class="card-text"><strong>Id : </strong>${code.slug}</h6>
    <h6 class="card-text"><strong>Release Date : </strong>${code.releaseDate}</h6>
    <h6 class="card-text"><strong>Storage : </strong>${code.mainFeatures.storage}</h6>
    <h6 class="card-text"><strong>Display : </strong>:${code.mainFeatures.displaySize}</h6>
    <h6 class="card-text"><strong>Processor : </strong>${code.mainFeatures.chipSet}</h6>
    <h6 class="card-text"><strong>Bluetooth : </strong>${code.others.Bluetooth}</h6>
    <h6 class="card-text"><strong>GPS : </strong>${code.others.GPS}</h6>
  </div>
  </div>
  
  `
  detailsDiv.appendChild(div);
 
}