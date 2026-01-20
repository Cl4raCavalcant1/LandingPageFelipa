// MENU MOBILE
const mobileBtn = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const icon = mobileBtn.querySelector('i');

if (mobileBtn) {
    mobileBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// FECHAR AO CLICAR NO LINK
document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// FAQ ACORDEÃO
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});

// ANIMAÇÕES
ScrollReveal().reveal('.hero-text', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.hero-img', { origin: 'bottom', distance: '50px', duration: 1000, delay: 200 });
ScrollReveal().reveal('.card-minimal', { interval: 100, origin: 'bottom', distance: '30px' });
ScrollReveal().reveal('.about-text', { origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.about-image-box', { origin: 'right', distance: '50px', duration: 1000 });