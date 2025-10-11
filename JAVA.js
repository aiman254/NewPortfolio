const burger = document.getElementById('burger');
const navMenu = document.getElementById('titles-div');
const burgerIcon = document.getElementById('burgerIcon')
const crossIcon = document.getElementById('crossIcon');
const titlesDiv = document.getElementById('titlesDiv');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  console.log(navMenu);

  if (navMenu.classList.contains('active')) {
    crossIcon.style.display = 'flex'
    burgerIcon.style.display = 'none'
  } else {
    crossIcon.style.display = 'none'
    burgerIcon.style.display = 'flex'
  }

});

const darkModeLogo = document.querySelector(".darkModeLogo");
const lightModeLogo = document.querySelector(".lightModeLogo");
const body = document.querySelector('body');
const mode = document.querySelector('.mode')
mode.addEventListener('click', () => {
  body.classList.toggle('darkMode')
  if (body.classList.contains('darkMode')) {
    lightModeLogo.style.display = 'block'
    darkModeLogo.style.display = 'none'
  } else {
    lightModeLogo.style.display = 'none'
    darkModeLogo.style.display = 'block'
  }

})

