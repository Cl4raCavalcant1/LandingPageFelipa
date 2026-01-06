// MENU MOBILE
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
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