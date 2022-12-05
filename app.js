// select dom for see the menu bar 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


// menu show 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
        navToggle.style.color = 'transparent'

    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
        navToggle.style.color = 'black';


    })
}

// services section 
const modelViews = document.querySelectorAll('.services__model'),
     modelBtns = document.querySelectorAll('.services__button'),
     modelClass = document.querySelectorAll('.services__model-close')

     let model = function(modelClick){
         modelViews[modelClick].classList.add('active-model')
     }
   
     modelBtns.forEach((modelBtns,i) =>{
         modelBtns.addEventListener('click',()=>{
             model(i)
         })
     })
modelClass.forEach((modelClose) =>{
    modelClose.addEventListener('click',()=>{
        modelViews.forEach((modalview)=>{
            modalview.classList.remove('active-model')
        })
    })
})

// portfolio sections data

let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    mousewheel: true,
    keyboard: true,
  });


// Team section 

let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    // mousewheel: true,
    // keyboard: true,
    breakpoints:{
        568:{
            slidePerView: 2,
        }
    }
  });


//   scroll secton active line

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const setionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + setionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)

// scroll header seciotn

function scrollHeader(){
    const nav = document.getElementById('header')
    if(this.scrollY >= 80)nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)



// show scroll top 

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)


// Dark light themes

const themeButton = document.getElementById('theme-button')
const darktTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selec)
const selectTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darktTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if(selectTheme){
    document.body.classList[selectTheme === 'dark' ? 'add' : 'remove'](darktTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}


// active dactive the theme manualy with the buttons

themeButton.addEventListener('click',() =>{
    document.body.classList.toggle(darktTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


// sheet script
const scriptURL = 'https://script.google.com/macros/s/AKfycbzWgFzwW-L0C6yWKRsyUu--fBFzqNquOzSla4RhP9nAC7j5eHogJH9TH2lQ0ELcImmB/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('mgs')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "Send SuccessFully"
      setTimeout(() => {
        msg.innerHTML = ""
      }, 2000)

      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})














































