// 'use strict';

// My Name
let myName  = "Tshepo Mohlatlole";
let myNameOutput = document.getElementById('my-name');
let c       = 0;

let time = setInterval(() => {
    if((myName.length - 1) == c) {
        clearInterval(time);
    }

    myNameOutput.innerHTML += myName[c];
    // console.log(myName[c]);
    c++;
}, 500);

// Navigation
window.addEventListener('scroll', function (e) {
    var myNav = document.getElementById('navbar');

    if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        myNav.classList.add("nav-coloured");
        myNav.classList.remove("nav-transparent");
    } else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-coloured");
    }
});