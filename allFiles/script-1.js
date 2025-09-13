particlesJS('particles-js', {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#000000'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 4,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'window',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 180,
                line_linked: {
                    opacity: 0.75
                }
            },
            push: {
                particles_nb: 6
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    retina_detect: true
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formMessage = document.getElementById('formMessage');
    
    // Simulate form submission
    formMessage.style.display = 'block';
    formMessage.textContent = 'Message sent successfully!';
    formMessage.className = 'success';
    
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 3000);
    
    this.reset();
});
