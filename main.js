//jay
const BurgerButton = document.querySelector("#Burger");



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



