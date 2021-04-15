'use strict';

//const gumb = document.getElementsByClassName('test');
document.addEventListener('click',function(e){
    if(e.target.name == "gumb") {
        let randbroj = Math.trunc(Math.random()*6)+1;
        let slika = document.getElementById('slikica');
        slika.src = "dice-" + randbroj + ".png";
    }
})