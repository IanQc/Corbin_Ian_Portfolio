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
      delay: 3000,
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});


const swiperImages = document.querySelectorAll('.swiper-slide img');
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');

swiperImages.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
    });
});

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Menu

const medieval = document.querySelector('.model3D');

medieval.addEventListener('click', function() {
    window.location.href = 'modelisation_medieval.html'; // Remplacez par l'URL de votre page cible
});

const anim = document.querySelector('.anim');

anim.addEventListener('click', function() {
    window.location.href = 'Animation3D.html'; // Remplacez par l'URL de votre page cible
});

const anim2 = document.querySelector('.anim2');

anim2.addEventListener('click', function() {
    window.location.href = 'anim3D.html'; // Remplacez par l'URL de votre page cible
});

const web = document.querySelector('.web');

web.addEventListener('click', function() {
    window.location.href = 'Web.html'; // Remplacez par l'URL de votre page cible
});



const jeux = document.querySelector('.jeuxU');

jeux.addEventListener('click', function() {
    window.location.href = 'ConceptionUnity.html'; // Remplacez par l'URL de votre page cible
});



const sonore = document.querySelector('.sonore');

sonore.addEventListener('click', function() {
    window.location.href = 'ConceptionSonore.html'; // Remplacez par l'URL de votre page cible
});
