const allPlayers = () => {
  const searchField = document.getElementById("search-field");
  const serachText = searchField.value;
  // console.log(serachText);
  const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${serachText}`;
  // console.log(url)

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPlayer(data.player));
};

const displayPlayer = (players) => {
  // console.log(Players)

  const playerContainer = document.getElementById("playerId");

  for (const player of players) {
    console.log(player);
    const div = document.createElement("div");
    const des = player.strDescriptionEN.slice(0,150);
    div.innerHTML = ` 
        <div class="card" style="width: 18rem;">
             <img width="100" height="200" src="${player.strThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                 <h4 class="card-title">Name: ${player.strPlayer} </h4>
                 <h6 class="card-title">Country: ${player.strNationality}</h6>
                 <h6 class="card-title">Club: ${player.strTeam}</h6>
             <p class="card-text">${des}</p>
        <button class="btn btn-danger">Delete</button>
        <button id= "details" onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
  </div>
</div>
        
        `;
        playerContainer.appendChild(div);
  }
  
};


const details = (id)=>{
  // console.log(id);
  const url= `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
  fetch(url)
  .then(res=>res.json())
  .then(data=> displayDetails(data));
}


const displayDetails = (info)=>{
  // console.log(info);

  
}