const btn = document.querySelector('#menu-btn')
const menu = document.querySelector('#menu')

btn.addEventListener('click',e=>{
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
})