

const loadPhone = ()=>{
    const searchField = document.getElementById('search-field');
    const inputText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputText}`;
    fetch(url)
    .then(res=> res.json())
    .then(data=> displayPhone(data.data));
}

const displayPhone = (phones) =>{
    phones = phones.slice(0,20);
    // console.log(phones)

    const phonediv = document.getElementById('phone-container');
        
     for(const phone of phones){
        console.log(phone);
         const div= document.createElement('div');
         div.classList.add("col-lg-4");
         div.classList.add("mb-5");
         div.classList.add("mt-5");
         div.innerHTML = `
         <div class="card border-1" style="width: 15rem;">
         <img src="${phone.image}" class="card-img-top" alt="">
         <div class="card-body">
           <h5 class="card-title">${phone.phone_name}</h5>
           <h6 class="card-text"><strong>Brand: </strong>${phone.brand}</h6>
           <button class="btn btn-success">See Details</button>
      </div>
  </div>
        
        `
    phonediv.appendChild(div);

     }
}