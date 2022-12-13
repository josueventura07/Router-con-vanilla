const btnNav = [...document.querySelectorAll('.btnNav')];
const bg_body = document.querySelector('bg_body')
const home = document.querySelector('.home')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')
const btnWhatsapp = document.querySelector('.whatsapp')
const phoneN = document.querySelector('.phone')
const Menu = document.querySelector('.btn_menu')
const btnCloseMenu = document.querySelector('.btn_close-menu')
const Nav = document.querySelector('.nav')

Menu.addEventListener('click', (e) => {
    Nav.classList.toggle('show_nav')
    Menu.classList.toggle('hidden_menu')
    btnCloseMenu.classList.toggle('hidden_close-menu')
})

btnCloseMenu.addEventListener('click', (e) => {
    Nav.classList.toggle('show_nav')
    Menu.classList.toggle('hidden_menu')
    btnCloseMenu.classList.toggle('hidden_close-menu')
    
})

btnWhatsapp.addEventListener('click', (e) => {
    btnWhatsapp.classList.toggle('deploy_whatsapp')
    phoneN.classList.toggle('deploy_number')
    
})

btnNav.forEach((element, i) => {
    btnNav[i].addEventListener('click', (e) => {
        
        let position = i

       
        
    })
}) 


function bg_bodyswitch() {
    
}
