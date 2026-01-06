// 1. MENU MOBILE
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const icon = mobileBtn?.querySelector('i');

if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Troca Bars por X
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fecha ao clicar em link
    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// 2. FAQ ACORDEÃO
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        item.classList.toggle('active');
    });
});

// 3. ANIMAÇÕES (ScrollReveal)
const sr = ScrollReveal({ distance: '50px', duration: 1000, delay: 200, reset: false });
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.hero-image-container', { origin: 'bottom', delay: 400 });
sr.reveal('.card-minimal', { interval: 150 });
sr.reveal('.about-text', { origin: 'left' });
sr.reveal('.about-image-wrapper', { origin: 'right' });
sr.reveal('.faq-item', { interval: 100 });
sr.reveal('.testi-card', { interval: 200 });