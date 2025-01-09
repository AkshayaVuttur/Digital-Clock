//const clock=document.getElementById('box');
//setInterval(function (){
    //let d= new Date();
   // clock.innerHTML=d.toLocaleTimeString();
 //} ,1000);

//
//setInterval(myTimer, 1000);

//function myTimer() {
  //const d = new Date();
  //document.getElementById("box").innerHTML = d.toLocaleTimeString();
  
  //const clock = document.getElementById('box'); // Use getElementById to get the element by its ID
  //setInterval(function () {
   //   let d = new Date();
   //   clock.innerHTML = d.toLocaleTimeString();
  //}, 1000);
  
  
  document.addEventListener('DOMContentLoaded', function () {
    const clock = document.getElementById('box');
    setInterval(function () {
        let d = new Date();
        clock.innerHTML = d.toLocaleTimeString();
    }, 1000);
});
document.addEventListener('DOMContentLoaded', function () {
  const clock = document.getElementById('box2');
  setInterval(function () {
      let d = new Date();
      clock.innerHTML = d.toLocaleDateString('en-GB');
  }, 1000);
});
