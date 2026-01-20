// MENU MOBILE (Abrir e Fechar)
const mobileBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const icon = mobileBtn.querySelector('i');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Troca icone
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar no link
document.querySelectorAll('.nav-link, .nav-btn-mobile').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// FAQ (ACORDEÃO COM ANIMAÇÃO)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        
        // Se quiser que feche os outros ao abrir um, descomente a linha abaixo:
        // document.querySelectorAll('.faq-item').forEach(i => i !== item && i.classList.remove('active'));
        
        item.classList.toggle('active');
    });
});

// ANIMAÇÕES AO ROLAR (ScrollReveal)
ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.hero-img', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.card-service', { interval: 100, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.about-info', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.about-photo-wrapper', { origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.testi-card', { interval: 150, origin: 'bottom' });