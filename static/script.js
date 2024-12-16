/* Abre e fecha o menu lateral em modo mobile */

const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

const header = document.querySelector('#header')
    const home = document.querySelector('#home')
    const about = document.querySelector('#about')
    const abilities = document.querySelector('#abilities')
    const certificates = document.querySelector('#certificates')
    const portfolio = document.querySelector('#portfolio')
    const contact = document.querySelector('#contact')
    const languageButton = document.querySelector('#changeLanguage')
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

function changeLanguage() {
    languageButton.innerText = "Change Language";
    home.innerHTML = '<i class="bi bi-house-door"></i>Home'
    about.innerHTML = '<i class="bi bi-person-fill"></i> About'
    abilities.innerHTML = '<i class="bi bi-book"></i> Abilities'
    certificates.innerHTML = '<i class="bi bi-journal"></i> Certificates'
    portfolio.innerHTML = '<i class="bi bi-code-square"></i> Portfolio'
    contact.innerHTML = '<i class="bi bi-envelope"></i> Contact'
}