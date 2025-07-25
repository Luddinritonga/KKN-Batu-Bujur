/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

// Toggle hamburger menu
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');

  // Tutup semua submenu saat klik hamburger
  document.querySelectorAll('.dropdown__menu').forEach(menu => {
    menu.style.display = 'none';
  });
});

const navLink = document.querySelectorAll('.nav__link');

function linkAction(e) {
  const submenu = this.nextElementSibling;

  if (submenu && submenu.classList.contains('dropdown__menu')) {
    // Klik link yang punya submenu
    e.preventDefault();

    // Tutup semua submenu lain
    document.querySelectorAll('.dropdown__menu').forEach(menu => {
      if (menu !== submenu) {
        menu.style.display = 'none';
      }
    });

    // Toggle submenu ini
    if (submenu.style.display === 'block') {
      submenu.style.display = 'none';
    } else {
      submenu.style.display = 'block';
    }

  } else {
    // Klik link biasa → tutup hamburger menu & semua submenu
    navMenu.classList.remove('show-menu');
    document.querySelectorAll('.dropdown__menu').forEach(menu => {
      menu.style.display = 'none';
    });
  }
}

// Tambahkan event listener ke semua .nav__link
navLink.forEach(link => link.addEventListener('click', linkAction));



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

