
const loadBuddy = () =>{
  fetch('https://randomuser.me/api/?results=5')
  .then(res=>res.json())
  .then(data=> displayBuddies(data))
}

loadBuddy();


const displayBuddies = (data)=>{
  // console.log(data.results);
  const buddies = data.results;
  const buddiesDiv = document.getElementById("buddies");
  for(const buddy of buddies){
    console.log(buddy);
    const p= document.createElement("p");
    p.innerText = `Name: ${buddy.name.title} ${buddy.name.first}  ${buddy.name.last}
    Email: ${buddy.email}
    Phone: ${buddy.phone }
    `;
    buddiesDiv.appendChild(p);

  }
}