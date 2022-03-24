

function loadAlbum(){
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res=>res.json())
    .then(data=> displayAlbum(data));
}

loadAlbum();




function displayAlbum(albums){
    // console.log(albums)
    const albumsContainer = document.getElementById("albums");
    for(const album of albums){
        console.log(album)
        const p= document.createElement("p");
        p.innerText= album.title;
        albumsContainer.appendChild(p);
    }
    
}