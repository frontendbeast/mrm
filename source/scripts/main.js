const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', event => {
  nav.classList.toggle('is-visible');
  navBtn.classList.toggle('is-active');
});
