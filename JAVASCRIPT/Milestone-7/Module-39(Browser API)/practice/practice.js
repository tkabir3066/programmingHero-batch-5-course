
 const maaComing = ()=>{
     alert('maa coming!')
 }


 const askPicnic = ()=>{
     const res = confirm("Are you going to picnic?")
     console.log(res);

     if(res===true){
         alert('fee ta paytm kore dao')
     }else{
         console.log('Dure giye mor');
     }
 }


 const askName = ()=>{
   const name =  prompt("What is your name : ");
   if(name){
       console.log(name);
   }else{
       console.log('Enter a valid name')
   }
 }