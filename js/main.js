//Variables
const navLink = document.querySelector('.header__nav');
const links = document.querySelectorAll('.header__nav--links')
const section = document.querySelectorAll('.section')

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


