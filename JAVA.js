// let btn= document.querySelector(".modeLogo");
// let body=document.querySelector("body");
// let mode="light";
// btn.addEventListener("click",()=>{
//     if("light"){
//     document.body.style.backgroundColor="black";
//     document.body.style.Color="white";

// }
// })

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.titles-div');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
});

