// baad ma
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
  header.classList.toggle('shadow', window.scrollY > 0);
});

// responsive 
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = ()  =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
window.onscroll = () =>{
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
var swiper = new Swiper(".home", {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });

var swiper = new Swiper(".coming-container", {
    loop:true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
   breakpoints: {
    0: {
      slidesPerView: 2,
    },
    568: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    968: {
      slidesPerView: 5,
    }
   }
  });
 document.addEventListener('click', function(event) {
   var target = event.target;
   if (target.matches('.btn a')) {
     var playSection = document.querySelector('.play');
     playSection.classList.add('active-popup');
   }
 });
function closeVideo() {
    var playSection = document.getElementById("play");
    playSection.style.display = "none";

    var video = document.getElementById("m-video");
    video.pause();
}
 document.addEventListener('click', function(event) {
   var target = event.target;
   if (target.matches('.btn1 a')) {
     var playSection = document.querySelector('.play1');
     playSection.classList.add('active-popup1');
   }
 });
function closeVideo1() {
    var playSection = document.getElementById("play1");
    playSection.style.display = "none";

    var video = document.getElementById("m-video1");
    video.pause();
}
 document.addEventListener('click', function(event) {
   var target = event.target;
   if (target.matches('.btn2 a')) {
     var playSection = document.querySelector('.play2');
     playSection.classList.add('active-popup2');
   }
 });
function closeVideo2() {
    var playSection = document.getElementById("play2");
    playSection.style.display = "none";

    var video = document.getElementById("m-video2");
    video.pause();
}

