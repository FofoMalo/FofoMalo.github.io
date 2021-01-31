let header = document.querySelector('.header')
let hamburgerMenu = document.querySelector('.hamburger-menu')

hamburgerMenu.addEventLister('click', ()=>{
  header.classList.toggle('menu-open')
})