const toogleBtn = document.querySelector('.header__toogleBtn');
const menu = document.querySelector('.header__menu');
const links = document.querySelector('.header__links');

toogleBtn.addEventListener('click', () => {
menu.classlist.toggle('active');
links.classlist.toggle('active');
});
