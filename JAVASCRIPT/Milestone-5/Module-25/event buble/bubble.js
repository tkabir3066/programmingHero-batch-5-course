
  /* document.getElementById('Second-item').addEventListener("click", function(event){
      console.log("second item clicked");
      event.stopPropagation();

  })

  document.getElementById('list-container').addEventListener("click", function(event){
      console.log("ul clicked");
      event.stopPropagation();
  })

  document.getElementById('section-container').addEventListener("click", function(){
      console.log("section clicked");
  }) */



//   if same eventhandler muliple times

document.getElementById('Second-item').addEventListener("click", function(event){
    console.log("second item clicked");
    event.stopImmediatePropagation();
    

})
document.getElementById('Second-item').addEventListener("click", function(event){
    console.log("second item clicked");
   

})
document.getElementById('Second-item').addEventListener("click", function(event){
    console.log("second item clicked");
    

})
document.getElementById('Second-item').addEventListener("click", function(event){
    console.log("second item clicked");
    

})