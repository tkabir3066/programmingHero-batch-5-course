
const loadCountries = ()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data => displayCountries(data))
}

loadCountries()


const displayCountries = (countries) =>{
//  console.log(countries);
  const countriesDiv = document.getElementById('countries');
 countries.forEach(country=> {
    //  console.log(country);

    const div = document.createElement('div');
    div.classList.add("country");

    div.innerHTML = `
     <h3>Country: ${country.name.common}</h3>
     <p>Capital : Capital: ${country.capital}</p>
     <button style= "margin-top:10px;" onclick="loadCountryByName('${country.name.common}')"> Show Details </button>
    
    `



   /*  const h3 = document.createElement("h3");
    h3.innerText = `Country: ${country.name.common}`

    const p = document.createElement('p');
    p.innerText = `Capital: ${country.capital}
    Continent: ${country.continents}
    Population: ${country.population}
    Flag: 
    `;
    
    const div2 = document.createElement('div');
    div2.innerHTML = `<img width="200" src="${country.flags.png}">`;
    const button = document.createElement('button');
    button.innerText = 'Show Details';
    
    button.onclick("loadCountryDSetail()")
      
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(div2);
    
    div.appendChild(button);
    
     */
    countriesDiv.appendChild(div);
 })

}



const loadCountryByName = (name)=>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayCountryDetail(data[0]))
    
}


const displayCountryDetail = country => {
    // console.log(country)
    const countryDiv = document.getElementById('country-detail');
    countryDiv.innerHTML = `
    <h3>Country: ${country.name.common}</h3>
    <p>Capital : Capital: ${country.capital}</p>
    <p>Continent: ${country.continents}</p>
    <p>Population: ${country.population}</p>
    <p>Flag: </p>
    <img width="200" src="${country.flags.png}">
    `
}