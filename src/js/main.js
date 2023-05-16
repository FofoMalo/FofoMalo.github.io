/* here are the old js code write for eventHandler

const menuBtn = document.querySelector ('.menubtn');
const hamburger = document.querySelector('.menubtn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItem = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(){
  if(!showMenu){
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItem.forEach(item => item.classList.add('open'));

    showMenu = true;
  }else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItem.forEach(item => item.classList.remove('open'));
    
    showMenu = false;
  }
}

*/

const menuBtn = document.querySelector('.menubtn');
const hamburger = document.querySelector('.menubtn_burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav_item');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  showMenu = !showMenu;
  const method = showMenu ? 'add' : 'remove';
  hamburger.classList[method]('open');
  nav.classList[method]('open');
  menuNav.classList[method]('open');
  navItems.forEach(item => item.classList[method]('open'));
}
