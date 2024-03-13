const pageHeader = document.querySelector('.page-header');
const navToggleWrapper = document.querySelector('.nav-burger-wrapper');
const navMenu = document.querySelector('.main-nav');

navToggleWrapper.addEventListener('click', () => {
  pageHeader.classList.toggle('menu-open');
});
