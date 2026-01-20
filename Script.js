// MENU MOBILE
const mobileBtn = document.getElementById('mobile-btn');
const navMenu = document.getElementById('nav-menu');

if (mobileBtn && navMenu) {
    const icon = mobileBtn.querySelector('i');
    
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Alterna ícone entre barras e X
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// FAQ ACORDEÃO
const faqButtons = document.querySelectorAll('.faq-btn');

faqButtons.forEach(button => {
    button.addEventListener('click', () => {
        const item = button.parentElement;
        // Fecha outros se quiser (opcional)
        // document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
        
        item.classList.toggle('active');
    });
});

// ANIMAÇÕES AO ROLAR (ScrollReveal)
// Certifique-se que o script do ScrollReveal está no HTML antes deste arquivo
if (typeof ScrollReveal !== 'undefined') {
    ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '50px', duration: 1000, delay: 200 });
    ScrollReveal().reveal('.hero-img', { origin: 'bottom', distance: '50px', duration: 1000, delay: 400 });
    ScrollReveal().reveal('.section-title', { origin: 'top', distance: '30px', duration: 800 });
    ScrollReveal().reveal('.card', { interval: 100, origin: 'bottom', distance: '30px' });
    ScrollReveal().reveal('.about-grid', { duration: 1000 });
}