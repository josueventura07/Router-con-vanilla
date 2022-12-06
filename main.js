const btnNav = [...document.querySelectorAll('.btnNav')];
const bg_body = document.querySelector('bg_body')
const home = document.querySelector('.home')
const about = document.querySelector('.about')
const contact = document.querySelector('.contact')



btnNav.forEach((element, i) => {
    btnNav[i].addEventListener('click', (e) => {
        
        let position = i

       console.log(position)
        
    })
}) 


function bg_bodyswitch() {
    
}
