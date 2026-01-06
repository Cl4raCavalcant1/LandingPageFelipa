const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon.classList.replace('fa-times', 'fa-bars');
        });
    });
}

// FAQ ACORDEÃO
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.classList.toggle('active');
    });
});

// ANIMAÇÕES
const sr = ScrollReveal({ distance: '50px', duration: 1000, delay: 200, reset: false });
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.card-minimal', { interval: 150 });
sr.reveal('.testi-card', { interval: 200 });