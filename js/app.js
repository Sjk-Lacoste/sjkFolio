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
var myNav = document.getElementsByClassName('navbar');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 200) {
        this.myNav.classList.add("nav-coloured");
        this.myNav.classList.remove("nav-transparent");
    } else {
        this.myNav.classList.add("nav-transparent");
        this.myNav.classList.remove("nav-coloured");
    }
};