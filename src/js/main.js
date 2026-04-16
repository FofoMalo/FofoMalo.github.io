const menuBtn = document.querySelector('.menubtn');
const hamburger = document.querySelector('.menubtn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && showMenu) {
    toggleMenu();
    menuBtn.focus();
  }
});

function toggleMenu() {
  showMenu = !showMenu;
  const method = showMenu ? 'add' : 'remove';
  menuBtn.setAttribute('aria-expanded', showMenu);
  hamburger.classList[method]('open');
  nav.classList[method]('open');
  menuNav.classList[method]('open');
  navItems.forEach(item => item.classList[method]('open'));
}
