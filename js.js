'use strict';

//const gumb = document.getElementsByClassName('test'); // not a good way to define button
document.addEventListener('click',function(e){ // this method to find button click is more reliable and less resource intensive / faster
    if(e.target.name == "gumb") { 
        let randbroj = Math.trunc(Math.random()*6)+1; // needs to trigger everytime the button gets clicked or it will have initial value all the time
        let slika = document.getElementById('slikica'); // needs to get re-instated on every click or the scope can't reach the declaration
        slika.src = "dice-" + randbroj + ".png"; // idk if this had to be changed but this is how I connect dynamic image names :D
    }
})