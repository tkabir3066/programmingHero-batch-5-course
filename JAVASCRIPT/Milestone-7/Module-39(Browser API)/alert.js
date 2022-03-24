
//  console.log("hello world");
//  alert("hi")



const maaComing = ()=>{

    alert("maa coming!");

} 

const askPicnic = () =>{
    const response = confirm('Are you going to picnic?');
    console.log(response);

    if(response === true){
        alert('amake fee ta paytm kore dao');
    }
    else{
        console.log("nahole dure paliye ja");
    }
}


const askName = () =>{
    const name = prompt("What is your name ?");
    if(name){
        console.log(name);
    }
    else{
        console.log('Enter a valid name');
    }
}