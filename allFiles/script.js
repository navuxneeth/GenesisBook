// Grid Animation
const canvas = document.getElementById('gridCanvas');
const ctx = canvas.getContext('2d');
let mouse = { x: 0, y: 0 };

class GridNode {
    constructor(x, y) {
        this.origX = x;
        this.origY = y;
        this.x = x;
        this.y = y;
    }

    update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
            const force = (100 - distance) * 0.015;
            const angle = Math.atan2(dy, dx);
            this.x -= Math.cos(angle) * force;
            this.y -= Math.sin(angle) * force;
        } else {
            this.x += (this.origX - this.x) * 0.1;
            this.y += (this.origY - this.y) * 0.1;
        }
    }
}

let gridNodes = [];
const gridSpacing = 60;

function initGrid() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    gridNodes = [];
    
    for (let x = gridSpacing; x < canvas.width - gridSpacing; x += gridSpacing) {
        for (let y = gridSpacing; y < canvas.height - gridSpacing; y += gridSpacing) {
            gridNodes.push(new GridNode(x, y));
        }
    }
}

function drawLines() {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    
    for (let i = 0; i < gridNodes.length; i++) {
        const node = gridNodes[i];
        for (let j = i + 1; j < gridNodes.length; j++) {
            const other = gridNodes[j];
            const dx = node.x - other.x;
            const dy = node.y - other.y;
            
            if (Math.abs(dx) < gridSpacing * 1.5 && Math.abs(dy) < gridSpacing * 1.5) {
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < gridSpacing * 1.5) {
                    ctx.moveTo(node.x, node.y);
                    ctx.lineTo(other.x, other.y);
                }
            }
        }
    }
    ctx.stroke();
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gridNodes.forEach(node => node.update());
    drawLines();
    requestAnimationFrame(animate);
}

// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: { value: 50 },
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
        move: { enable: true, speed: 2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'push' }
        }
    }
});

// Form Toggle
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    loginForm.style.display = loginForm.style.display === 'none' ? 'flex' : 'none';
    signupForm.style.display = signupForm.style.display === 'none' ? 'flex' : 'none';
}

// Event Listeners
let throttleTimer;
window.addEventListener('mousemove', (e) => {
    if (!throttleTimer) {
        throttleTimer = setTimeout(() => {
            throttleTimer = null;
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }, 16);
    }
});

window.addEventListener('resize', () => {
    clearTimeout(throttleTimer);
    initGrid();
});

// Initialize
initGrid();
animate();
