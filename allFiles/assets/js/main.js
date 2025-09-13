/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}   

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER PROJECTS ===============*/
let swiperProjects = new Swiper(".projects__container", {
    loop: true,
    spaceBetween: 30,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: -56,
      },
    },
});

/*=============== SWIPER TESTIMONIAL ===============*/
var swiperTestimonial = new Swiper(".testimonial__container", {
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  	const scrollDown = window.scrollY
	sections.forEach(current => {
		const sectionHeight = current.offsetHeight,
		      sectionTop = current.offsetTop - 58,
		      sectionId = current.getAttribute('id'),
		      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
		if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
			sectionsClass.classList.add('active-link')
		} else {
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('bg-header') 
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
})
sr.reveal(`.home__data, .projects__container, .testimonial__container`)
sr.reveal(`.home__info div`, {delay: 600, origin: 'bottom', interval: 100})
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, {origin: 'left'})
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, {origin: 'right'})
sr.reveal(`.qualification__content, .services__card`, {interval: 100})

/*=============== DARK MODE TOGGLE ===============*/
const themeToggle = document.getElementById('theme-toggle')
const body = document.body

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
    const isDark = body.classList.contains('dark-theme')
    themeToggle.innerHTML = isDark ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>'
})

/*=============== BACKGROUND ANIMATIONS ===============*/
const canvas = document.getElementById('background-canvas')
const ctx = canvas.getContext('2d')
let particles = []

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

window.addEventListener('resize', resizeCanvas)
resizeCanvas()

function createParticle(x, y) {
  const particle = {
    x: x,
    y: y,
    size: Math.random() * 10 + 5,
    speedX: Math.random() * 2 - 1,
    speedY: Math.random() * 2 - 1,
    life: 100,
  }
  particles.push(particle)
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  particles.forEach((particle, index) => {
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(0, 0, 0, ${particle.life / 100})`
    ctx.fill()
    particle.x += particle.speedX
    particle.y += particle.speedY
    particle.life -= 2
    if (particle.life <= 0) {
      particles.splice(index, 1)
    }
  })
  requestAnimationFrame(drawParticles)
}

drawParticles()

window.addEventListener('mousemove', (e) => {
  createParticle(e.clientX, e.clientY)
})