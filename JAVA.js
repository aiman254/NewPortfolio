// let btn= document.querySelector(".modeLogo");
// let body=document.querySelector("body");
// let mode="light";
// btn.addEventListener("click",()=>{
//     if("light"){
//     document.body.style.backgroundColor="black";
//     document.body.style.Color="white";

// }
// })

const burger = document.getElementById('burger');
const navMenu = document.getElementById('titles-div');
const burgerIcon = document.getElementById('burgerIcon')
const crossIcon = document.getElementById('crossIcon');
const titlesDiv = document.getElementById('titlesDiv');

burger.addEventListener('click', () => {
  console.log(navMenu);
  
  navMenu.classList.toggle('active');
  if (navMenu.classList.contains('active')) {
    crossIcon.style.display = 'flex'
    burgerIcon.style.display = 'none'
  } else {
    crossIcon.style.display = 'none'
    burgerIcon.style.display = 'flex'
  }

});
