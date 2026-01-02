// JS extraído de index.html
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Smooth scrolling
if (document.querySelectorAll) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                document.getElementById('navLinks').classList.remove('active');
            }
        });
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const navLinks = document.getElementById('navLinks');
    if (!nav.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});
