// 'use strict';
/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
}
  
  /* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}

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
}, 50);

// Navigation
// window.addEventListener('scroll', function (e) {
//     var myNav = document.getElementById('home');

//     if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
//         myNav.classList.add("nav-coloured");
//         myNav.classList.remove("nav-transparent");
//     } else {
//         myNav.classList.add("nav-transparent");
//         myNav.classList.remove("nav-coloured");
//     }
// });

// Auto expand textarea
function adjust_textarea(h) {
    h.style.height = "20px";
    h.style.height = (h.scrollHeight)+"px";
}