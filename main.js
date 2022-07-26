// NAVIGATION SCROLL

const nav = document.getElementById('navigation')
const button = document.getElementsByClassName('openMenu')
const UpButton = document.getElementById('BackTopButton')

function onScroll() {
  NavOnScroll()
  ShowBackToTopButton()
}

function NavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function ShowBackToTopButton() {
  if (scrollY > 500) {
    UpButton.classList.add('show')
  } else {
    UpButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExpanded')
}

function closeMenu() {
  document.body.classList.remove('menuExpanded')
}

ScrollReveal({
  origin: 'top',
  distance: '1.875rem',
  duration: 2000
}).reveal(`
  #home,
  #home img,
  #home .information,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact .content
  `)
