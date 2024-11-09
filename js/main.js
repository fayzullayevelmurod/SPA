let navLink = document.querySelector(".header__nav-link");
let navLinkClose = document.querySelector(".header__nav-link-close");
let navLinkBurger = document.querySelector(".header__nav-burger");

navLinkBurger.addEventListener('click', () => {
  navLink.classList.add('active')
});

navLinkClose.addEventListener('click', () => {
  navLink.classList.remove('active')
});

navLink.addEventListener('click', () => {
  navLink.classList.remove('active')
});



var swiper = new Swiper(".treatmentsSwiper", {
  slidesPerView: 1.10,
  spaceBetween: 28,
  // centeredSlides: true,
  // slidesPerView: 'auto',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.6,
      spaceBetween: 50,
    },
  },
});
