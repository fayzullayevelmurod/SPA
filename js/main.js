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

