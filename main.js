// NAVIGATION SCROLL

const nav = document.getElementById('navigation')
const button = document.getElementsByClassName('openMenu')

function onScroll() {
  if(scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menuExpanded')
}

function closeMenu() {
  document.body.classList.remove('menuExpanded')
}