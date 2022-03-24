// get vs post important for interview
// CRUD Operation
// CRUD vs REST API
// search on google http reponses codes


function loadPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=> displayPosts(data));
}

loadPosts();


function displayPosts(data){
   const postContainer = document.getElementById("posts");
    for(const post of data){
        // console.log(post.body);

        const div = document.createElement("div");
        div.classList.add("posts")
        div.innerHTML = 
        ` <h3> ${post.title} </h3>
        <p>${post.body} </p>
        
        `;
       
        postContainer.appendChild(div);
    }

}




//ADD A POST

function addAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body : JSON.stringify({
            title : "My new post",
            body : "This is my new posts",
            userId : 1
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then()
    .then()
      
}