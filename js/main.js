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

navBar.addEventListener('click', () => {
  navMenu.classList.toggle('navNew');
})

links.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('navNew'); 
  }) 
})