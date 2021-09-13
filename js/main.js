//Variables
const navLink = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__nav--links')
const section = document.querySelectorAll('.section')
const navBar = document.querySelector('#bar')
const navMenu = document.querySelector('#navMenu')

window.addEventListener('scroll', (e) =>{
  section.forEach (sect => {
    const sectionTop = sect.offsetTop;
    const sectionHeight = sect.clientHeight;
      if(pageYOffset >= (sectionTop - sectionHeight / 3)){
        current = sect.getAttribute('id');
      }      
    })
    
    links.forEach(link => {
      link.classList.remove('active');
      if(link.classList.contains(current)) {           
        link.classList.add('active');
      }
    })
})
const toggle1 = document.querySelector('#bar1')
const toggle2 = document.querySelector('#bar2')
const toggle3 = document.querySelector('#bar3')

navBar.addEventListener('click', () => {
  navMenu.classList.toggle('navNew');
  toggle1.classList.toggle('barTop')
  toggle2.classList.toggle('barMid')
  toggle3.classList.toggle('barBottom')
  })

links.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('navNew');
    toggle1.classList.remove('barTop')
    toggle2.classList.remove('barMid')
    toggle3.classList.remove('barBottom')
  }) 
})


//MODAL
const modal = document.getElementsByClassName('modalGaleria')[0];

document.getElementById('openModal').onclick = () =>{
    modal.style.opacity = 100;
    modal.style.zIndex = 100;
}
document.getElementById('closeModal').onclick = () =>{
    modal.style.opacity = 0;
    modal.style.zIndex = -1;
}
