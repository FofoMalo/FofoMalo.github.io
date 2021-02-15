//selectors
let header = document.querySelector('.header')
let hamburgerMenu = document.querySelector('.navbar-toggler')

hamburgerMenu.addEventLister('click', ()=>{
  header.classList.toggle('menu-open')
})