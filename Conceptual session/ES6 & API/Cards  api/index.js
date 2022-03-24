

// 1. button event handler setup
//2. get input value
//3. error handling for string value
const main = document.getElementById('main');
const loadCards = () =>{
  const input = document.getElementById('input-value');
  const inputText = parseInt(input.value);
  const error = document.getElementById('error');
//   console.log(error);
//   console.log(inputText);
  if(isNaN(inputText) || inputText == ""){
    //   alert("plese enter a valid number");

    error.innerText = "Please enter a number";
    input.value = '';
    main.innerHTML= '';
  }

  else if(inputText<=0){
      error.innerText = "please enter a positive number";
      input.value = '';
      main.innerHTML = '';
     
  }
  else if(inputText>52){
      error.innerText = "plese input a valid number";
      input.value = '';
      main.innerHTML = '';
      
  }
 
  else{
    main.innerHTML = ''; // data load howar aagey dite hobe
      fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${inputText}`)
      .then(res=> res.json())
      .then(data => displayCards(data.cards))


      input.value = '';
      error.innerHTML = '';
    

  }
} 


const displayCards = (cards)=>{
    //  console.log(cards);
    
    for(const card of cards){          // object for-of loop chalate pare na
        // console.log(card);
        const div= document.createElement('div');
        div.classList.add("col-lg-4");
        div.classList.add("mb-5");
        div.classList.add("mt-5");
        div.innerHTML = `
        <div class="card" style="width: 15rem;">
        <img src="${card.image}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${card.suit}</h5>
          <p class="card-text">${card.code}</p>
          <button onclick= "cardDetails(' ${card.code}')" class="btn btn-primary">See Details</button>
     </div>
 </div>
        
        `;
   main.appendChild(div);
    }
}

const cardDetails = (code) =>{
  fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
      .then(res => res.json())
      .then(data => {
          const allCards = data.cards;
          const singleCard = allCards.find(card => card.code === code)
          console.log(singleCard)
          const div = document.createElement("div");

         
        
      })
}