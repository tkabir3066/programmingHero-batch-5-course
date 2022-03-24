
const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res=> res.json())
    .then(data=> displayQuote(data))
}



const displayQuote = quote =>{
    const elementContainer = document.getElementById("quote");
    elementContainer.innerText = quote.quote;
}