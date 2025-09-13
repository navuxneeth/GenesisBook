// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Interactive Cursor Animation (Light Effect)
document.addEventListener('mousemove', function(e) {
    const cursorLight = document.getElementById('cursor-light');
    cursorLight.style.left = e.clientX - 10 + 'px'; // Center the light
    cursorLight.style.top = e.clientY - 10 + 'px';
});