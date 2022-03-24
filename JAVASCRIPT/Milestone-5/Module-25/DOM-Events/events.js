

function makeRed(){
    document.body.style.backgroundColor = "red";
}





// blue
const blueButton = document.getElementById("blueId");
blueButton.onclick = makeBlue;

function makeBlue(){
    document.body.style.backgroundColor = "blue";
}


// using anonymous function

      const greenButton = document.getElementById("greenId");

      greenButton.onclick = function(){
          document.body.style.backgroundColor = "green";
      }



     const hotPinkButtton = document.getElementById("hotPink");
    //  console.log(hotPinkButtton);

    hotPinkButtton.addEventListener("click", function(){
        document.body.style.backgroundColor = "hotpink";
    })