/* Abre e fecha o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

const header = document.querySelector('#header')
    const home = document.querySelector('#home')
menuMobile.addEventListener('click', () => {
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    body.classList.toggle("menu-nav-active");
});

const navItem = document.querySelectorAll('.nav-item')

navItem.forEach(item => {
    item.addEventListener("click", () => {
        if (body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

function changeLanguage(){
    home.innerHTML = '<i class="bi bi-house-door"></i>Home'
}