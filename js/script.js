const hamburger = document.querySelector('#hamburger');

const nav = document.querySelector('#nav-menu');

hamburger.addEventListener("click", function(){
    nav.classList.toggle('hidden')
    hamburger.classList.toggle('hamburger-active')
});

// navbar fixed

window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if (window.pageYOffset > fixnav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};

// SCROLL REVEAL

const sr = ScrollReveal({
    origin: 'left',
    distance: '50px',
    duration: 2000,
    reset: true
});

sr.reveal(` #hero, #helper, #footer, .KontakKiri, #artikel, #about1, #spoiler, .buatkiri, #community, #contact, #tentang`, {
    interval:200
});

const srRight = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 2000,
    reset: true
});

srRight.reveal(` .KontakKanan, #data, #about2, .buatkanan`, {
    interval:200
});

// Button Top

// // Get the button
// let mybutton = document.getElementById("btn-back-to-top");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (
//     document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20
//   ) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }
// // When the user clicks on the button, scroll to the top of the document
// mybutton.addEventListener("click", backToTop);

// function backToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }


// // audio

// const audio = new Audio();
// audio.src = "/song/blessing.mp3";


// // AUTO SCROLL

// const mulai = document.querySelector('#mulai');

// mulai.addEventListener("click", function(){
//     setInterval(function(){
//         window.scrollBy(0, 2);
//     }, 10);
//     audio.play();
// });

