//jay
const BurgerButton = document.querySelector("#Burger");

const button_web = document.querySelector(".nouvelles__img--03");
const button_medieval = document.querySelector(".nouvelles__img--01");

/*
button_web.addEventListener("click", switchweb);
button_medieval.addEventListener("click", switchmedieval);
function switchweb() {
  window.location.href="ConceptionUnity.html"
}
function switchmedieval() {
  window.location.href="modelisation_medieval.html"
}*/

const swiperHero = new Swiper('.hero__swipper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});


const unitySwiper = new Swiper('.unity__swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
      delay: 5000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});



