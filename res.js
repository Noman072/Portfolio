burger = document.querySelector('.burger')
newnavlist = document.querySelector('.newnavlist')
burger = document.querySelector('.burger')

burger.addEventlistener('click', ()=>{
newnavlist.classList.toggle('v-class');
})