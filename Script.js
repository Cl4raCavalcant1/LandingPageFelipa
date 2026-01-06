/* =========================================
   MENU MOBILE
   ========================================= */
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
}

/* =========================================
   LÓGICA DO FAQ (ACORDEÃO)
   ========================================= */
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        
        // Fecha outros itens abertos (opcional)
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) item.classList.remove('active');
        });

        faqItem.classList.toggle('active');
    });
});

/* =========================================
   ANIMAÇÕES
   ========================================= */
const sr = ScrollReveal({ distance: '40px', duration: 1000, delay: 200, reset: false });
sr.reveal('.hero-text', { origin: 'left' });
sr.reveal('.card-minimal', { interval: 150 });
sr.reveal('.faq-item', { interval: 100 });