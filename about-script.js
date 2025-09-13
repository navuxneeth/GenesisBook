// about-script.js
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#000000' },
        shape: { type: 'circle' },
        opacity: { value: 0.3 },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#000000',
            opacity: 0.2,
            width: 1
        },
        move: { 
            enable: true, 
            speed: 2,
            out_mode: "bounce"
        }
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: { 
                enable: true, 
                mode: 'repulse' 
            },
            onclick: { 
                enable: true, 
                mode: 'push' 
            }
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            }
        }
    }
});
