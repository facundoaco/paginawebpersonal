const menu = document.querySelector(".Menu")
const openmenubtn = document.querySelector(".open-menu")
const closemenubtn = document.querySelector(".close-menu")

function toggleMenu(){
    menu.classList.toggle("menu_opened");

}

openmenubtn.addEventListener("click", toggleMenu);
closemenubtn.addEventListener("click", toggleMenu)

const menuLinks= document.querySelectorAll('.Menu a[href^="#"]');
menuLinks.forEach(menuLink=> {
    menuLink.addEventListener("click" , function(){
        menu.classList.remove("menu_opened");
    })
})