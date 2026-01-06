// 1. MENU MOBILE
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');
const icon = mobileBtn?.querySelector('i');

if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        icon?.classList.toggle('fa-bars');
        icon?.classList.toggle('fa-times');
    });

    document.querySelectorAll('.nav a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon?.classList.add('fa-bars');
            icon?.classList.remove('fa-times');
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

// 3. ANIMAÇÕES
const sr = ScrollReveal({ distance: '40px', duration: 1000, delay: 200, reset: false });
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.card-minimal', { interval: 150 });
sr.reveal('.faq-item', { interval: 100 });